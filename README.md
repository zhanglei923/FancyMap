FancyMap
========

FancyMap is a javascript key-value map with sequence orders and fancy performance.


API
=======

### put

        var map = new FancyMap();
        
        map.put('a', 1);
        map.put('A', 'a');
        map.put('c', null);
        map.put('d', undefined);
        map.put('e', NaN);
        map.put('f', {name:'zhanglei'});

### get
        var map = new FancyMap();
        
        map.put('a', 1);
        map.put('b', 2);
        alert(map.get('b'));//alert is 2


### has
### getKeys
### addAll
### each
### size
### remove
### clean
### getKeysByVal
