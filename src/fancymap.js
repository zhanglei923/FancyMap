window.FancyMap = function (){
	var mapArr = new Array();
	var keyArr = new Array();
	var keyExistArr = new Array();
	
	var me = this;

	var _get = function (key){
		return mapArr[key];
	};
	me.get = _get;
	 
	var _getByIndex = function (index){
		return mapArr[keyArr[index]];
	};
	me.getByIndex = _getByIndex;
	
	var _has = function (key){
		return keyExistArr[key] != null;
    };
	me.has = _has;
	
	var _put = function (key, value){
		if(!keyExistArr[key]){//do not use if(!keyArr[key]) to judge if this key existed, because user may put a 'null' or 'undefined' into map!
				keyArr[keyArr.length] = key;
				keyExistArr[key] = 'exist';
		}
		mapArr[key] = value;
	};
	me.put = _put;

	var _getKeys = function (){
		return keyArr;
	};
	me.getKeys = _getKeys;
	
	var _putAll = function (newmap, override){
		if(typeof override == 'undefined')override = true;//default is override the old one
		newmap.each(function (key, value){
			if(!override && _get(key)){
				//do not override
			}else{
				_put(key, value);
			}			
		});
    };
	me.putAll = _putAll;
	
	var _each = function (fn){
		var keyarr = _getKeys();
		for(var i=0,len=keyarr.length;i<len;i++){
			var keystr = keyarr[i];
			var resp = (fn)(keystr, _get(keystr));
			if(typeof resp != 'undefined' && (resp == false || resp == null)) break;
		}
	};
	me.each = _each;

	var _size = function (){
		return keyArr.length;
	};
	me.size = me.getLength = _size;
    
	var _del = function(key){
		var keyarr = _getKeys();
		for(var i=0,len=keyarr.length;i<len;i++){
			var keystr = keyarr[i];
			if(keystr == key){
				delArrayByIdx(keyArr , i);
				mapArr[key] = null;
				keyExistArr[key] = null;
			} 	  
		}
	}
	me.remove = me.del = _del;
	
	var _getKeyIdx = function (key){
		for(var i = 0, len = keyArr.length; i < len; i++){
			if(keyArr[i] === key)return i;			
		}
	};
	me.getKeyIdx = me.getKeyIndex = _getKeyIdx;
	 
	var _clean = function (){
		mapArr = new Array();
		keyArr = new Array();
		keyExistArr = new Array();
	};
	me.clean = _clean;
	 
	var _getKeysByVal = function (value){
		var keys = [];
		var isObj = (typeof value == 'object' ? true : false);
		_each(function (key, val){
			var s1, s2;
			if(val === value){
				keys[keys.length] = key;
			}else{
				if(isObj){
					s1 = val + ':' + obj2str(val);
					s2 = value + ':' + obj2str(value);
				}else{
					s1 = val;
					s2 = value;
				}
				if(s1 === s2) keys[keys.length] = key;
			}
		});
		return keys;
	 };
	 me.getKeysByVal = _getKeysByVal;
	 
	 //
	 function delArrayByIdx(array, index) {
		array.splice(index, 1);
	 }
	 function obj2str(o){
		var str = '';
		for(s in o){
			var oo = o[s];
			var ss;
			if(typeof oo == 'object'){
				ss = obj2str(oo);
			}else{
				ss = oo;
			}
			str = str + ',' + s + ':' + ss;
		}
		return str;
	 }
};
