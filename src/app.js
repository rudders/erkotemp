console.log('Erko temp!');
update_temp();

simply.on('singleClick', function(e) {
  update_temp();
});


simply.on('accelTap', function(e) {
  update_temp();
});

simply.text({
  title: 'Erko Temp!',
  body: 'This is a demo. Press buttons or tap the watch!',
}, true);

function update_temp(){
  ajax({ url: 'https://wakai.ninja.is/rest/v0/device/1014BBBK6210_0201_0_31?user_access_token=411df89c1649abf47d865d971c56c96cb22b094f', type: 'json' }, function(data){
    simply.body(data.data.last_data.DA + "°c");});
}