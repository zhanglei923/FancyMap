About
=======
FancyMap is a javascript key-value map with both sequence ability and hash performance.

Browser Support: IE6+, FireFox, Chrome, Opera, Safari and more.

License
=======
MIT: [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)


How to use:
=======
Download latest fancymap.js and include it into your page:

        <script src="/fancymap-latest.min.js"></script>


API
=======
>[put](#put),
>[get](#get),
>[getByIndex](#getByIndex),
>[has](#has),
>[getKeys](#getKeys),
>[getKeyIndex](#getKeyIndex),
>[getKeysByVal](#getKeysByVal),
>[putAll](#putAll),
>[each](#each),
>[size](#size),
>[remove](#remove),
>[clean](#clean)


### put()<span id="put"></span>
Put any type of content into the map, even a 'null' or an 'undefined' is acceptable:

        var map = new FancyMap();
        map.put('a', 1);
        map.put('b', 2);
        map.put('c', null);
        map.put('d', 'hello');
        map.put('e', undefined);
        
        alert(map.size());//alert is 5
        alert(map.has('c'));//alert is true

Content with a duplicated key will be replaced by the last one:

        var map = new FancyMap();
        map.put('a', 1);
        map.put('b', 2);
        map.put('a', 3);//<--duplicate
        
        alert(map.get('a'));//alert is 3


### get(key)<span id="get"></span>
Get content by an assigned key:

        var map = new FancyMap();
        map.put('a', 1);
        map.put('b', 2);
        
        alert(map.get('b'));//alert is 2

        
### getByIndex(i)<span id="getByIndex"></span>
Get content by order, just as a sequence array:

        var map = new FancyMap();
        map.put('a', 1);
        map.put('b', 2);
        map.put('c', 3);
        
        alert(map.getByIndex(2));//alert is 3


### has(key)<span id="has"></span>
Return true if key-value exist:

        var map = new FancyMap();
        map.put('a', 1);
        map.put('b', 2);
        
        alert(map.has('b'));//alert is true
        alert(map.has('c'));//alert is false


### getKeys()<span id="getKeys"></span>
Return keys as an array:

        var map = new FancyMap();
        map.put('a', 1);
        map.put('b', 2);
        map.put('c', 3);
        
        var list = map.getKeys();
        

### getKeyIndex()<span id="getKeyIndex"></span>
Get the sequence order of the key:

        var map = new FancyMap();
        map.put('a', 1);
        map.put('b', 2);
        map.put('c', 3);
        map.put('d', 4);
        	
        var i = map.getKeyIndex('c');
        alert(i);//alert is 2

### getKeysByVal()<span id="getKeysByVal"></span>
Get keys as an array by a given value.

        var map = new FancyMap();
        map.put('a', 0);
        map.put('b', 2);
        map.put('c', 0);
        map.put('d', 4);
        map.put('e', 0);
        
        var keys = map.getKeysByVal(0);
        
        alert(keys.length);//alert is 3

or, a plain json object value is also OK:

        var map = new FancyMap();
        map.put('a', {first:'zhang', last:'lei', info : {age: 20}});
        map.put('b', {first:'zhang', last:'lei', info : {age: 20}});
        map.put('c', {first:'M', last:'J'});
        map.put('d', {first:'zhang', last:'lei', info : {age: 30}});
        
        var val = {first:'zhang', last:'lei', info : {age: 20}}
        var keys = map.getKeysByVal(val);
        
        alert(keys.length);//alert is 2

### putAll( map, [override] )<span id="putAll"></span>
Merge another map into current one, if there are duplicated keys, it will be overrided, otherwise it will append as new contents:

        var map1 = new FancyMap();
        map1.put('a', 1);
        map1.put('b', 2);
        map1.put('c', 3);
        
        var map2 = new FancyMap();
        map2.put('a', 1);//<--duplicated key
        map2.put('e', 2);
        map2.put('f', 3);
        
        map1.putAll(map2);
        
        alert(map2.size());//alert is 5
        
'override' is optional, default is 'true', which will override the previous value if there is key confliction.

        var map1 = new FancyMap();
        map1.put('a', 1);
        map1.put('b', 2);
        map1.put('c', 3);
        	
        var map2 = new FancyMap();
        map2.put('A', 11);
        map2.put('B', 12);
        map2.put('a', 13);//<--duplicate
        map2.put('b', 14);//<--duplicate
        	
        map1.putAll(map2, false);

        alert(map1.get('a'));//alert is 1, which is the previous one

### each(fn)<span id="each"></span>
An iterator function instead of for() looping:

        var map = new FancyMap();
        map.put('a', 1);
        map.put('b', 2);
        map.put('c', 3);
        
        map.each(function (key, val){
             alert(key+':'+val); //alert is 'a:1', 'b:2', 'c:3'
        });
        
you can also break the looping menually by return 'false':

        var map = new FancyMap();
        map.put('a', 1);
        map.put('b', 2);
        map.put('c', 3);
        map.put('d', 4);
        var counter = 0;
        
        map.each(function(key, val) {
                if(counter == 2)return false;//return false to break
                counter++;
        });
        alert(counter);//alert is 2



### size()<span id="size"></span>
Return the current size of map, NOTICE that FancyMap will treat ANY type of content as a legal, even is 'null' or 'undefined':

        var map = new FancyMap();
        map.put('a', 1);
        map.put('A', 'a');
        map.put('c', null);
        map.put('d', undefined);
        map.put('e', NaN);
        map.put('f', {name:'zhanglei'});
        
        alert(map.size());//alert is 6

### <span id="remove">remove(key)</span>
Remove a content by key:

        var map = new FancyMap();
        map.put('a', 1);
        map.put('b', 2);
        map.put('c', 3);
        
        map.remove('a');
        
        alert(map.get('a'));//alert is null

### <span id="clean">clean()</span>
Reset to be a blank map.
