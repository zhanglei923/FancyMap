FancyMap
========

FancyMap is a javascript key-value map with sequence orders and fancy performance.


API
=======

### put()
You can put ANY type of value into this map, even a 'null' or an 'undefined' is acceptable:

        var map = new FancyMap();
        
        map.put('a', 1);
        map.put('A', 'a');
        map.put('c', null);
        map.put('d', undefined);
        map.put('e', NaN);
        map.put('f', {name:'zhanglei'});
        
        alert(map.size());//alert is 6

Duplicated key will be replaced by the last one:

        var map = new FancyMap();
        
        map.put('a', 1);
        map.put('a', 2);
        
        alert(map.get('a'));//alert is 2


### get()
Get content by an assigned key:

        var map = new FancyMap();
        
        map.put('a', 1);
        map.put('b', 2);
        
        alert(map.get('b'));//alert is 2


### has()
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


### each()
### size()
### remove()
### clean()
### getKeysByVal()
