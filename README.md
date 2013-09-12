FancyMap
========

FancyMap is a javascript key-value map with sequence orders and fancy performance.


API
=======

### put()
You can put ANY type of value into this map, even a 'null' or an 'undefined' is acceptable:

        var map = new FancyMap();
        
        map.put('a', 1);
        map.put('b', 2);
        map.put('c', 3);
        
        alert(map.size());//alert is 3

Duplicated key will be replaced by the last one:

        var map = new FancyMap();
        
        map.put('a', 1);
        map.put('a', 2);
        
        alert(map.get('a'));//alert is 2


### get(key)
Get content by an assigned key:

        var map = new FancyMap();
        
        map.put('a', 1);
        map.put('b', 2);
        
        alert(map.get('b'));//alert is 2

        
### getByIndex(i)
Get content by order, just as a sequence array:

        var map = new FancyMap();
        
        map.put('a', 1);
        map.put('b', 2);
        map.put('c', 3);
        
        alert(map.getByIndex(2));//alert is 3


### has(key)
Return true if key-value exist:

        var map = new FancyMap();
        
        map.put('a', 1);
        map.put('b', 2);
        
        alert(map.has('b'));//alert is true
        alert(map.has('c'));//alert is false


### getKeys()
Return keys as an array:

        var map = new FancyMap();
        
        map.put('a', 1);
        map.put('b', 2);
        map.put('c', 3);
        
        var list = map.getKeys();


### putAll( map )
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


### each(fn)
An iterator function instead of for() looping:

        var map = new FancyMap();
        
        map.put('a', 1);
        map.put('b', 2);
        map.put('c', 3);
        
        map.each(function (key, val){
             alert(key+':'+val); //alert is 'a:1', 'b:2', 'c:3'
        });


### size()
Return the current size of map, NOTICE that FancyMap will treat ANY type of content as a legal, even is 'null' or 'undefined':

        var map = new FancyMap();
        
        map.put('a', 1);
        map.put('A', 'a');
        map.put('c', null);
        map.put('d', undefined);
        map.put('e', NaN);
        map.put('f', {name:'zhanglei'});
        
        alert(map.size());//alert is 6

### remove(key)
Remove a content by key:

        var map = new FancyMap();
        
        map.put('a', 1);
        map.put('b', 2);
        map.put('c', 3);
        
        map.remove('a');
        
        alert(map.get('a'));//alert is null

### clean()
Reset to a blank map.


### getKeysByVal()
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

