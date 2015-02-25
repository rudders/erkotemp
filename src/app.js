console.log('Erko temp!');
update_temp();

simply.on('singleClick', function(e) {
  update_temp();
  update_wemo();
});


simply.on('accelTap', function(e) {
  update_temp();
  update_wemo();
});

simply.text({
  title: 'Erko Temp!',
  subtitle: 'Loading...'
  body: 'Loading...',
}, true);

function update_temp(){
  simply.subtitle("Loading (sub)...");
  ajax({ url: 'https://wakai.ninja.is/rest/v0/device/1014BBBK6210_0201_0_31?user_access_token=411df89c1649abf47d865d971c56c96cb22b094f', type: 'json' }, function(data){
    simply.subtitle(data.data.last_data.DA + "°c");});
}

function update_wemo(){
  simply.body("Loading (sub)...");
  ajax({ url: 'http://littlemac.binarylight.com.au:5000/api/environment?seconds=10', type: 'json' }, function(data){
    data.forEach(function(obj) { list += obj.name; });
    simply.body(list);
    });
}
