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

content of a duplicated key will be overrided by the last one:
        var map = new FancyMap();
        map.put('a', 1);
        map.put('a', 2);
        
        alert(map.get('a'));//alert is 2




### get()
Get content by key.
        var map = new FancyMap();
        map.put('a', 1);
        map.put('b', 2);
        
        alert(map.get('b'));//alert is 2


### has()
### getKeys()
### addAll()
### each()
### size()
### remove()
### clean()
### getKeysByVal()
