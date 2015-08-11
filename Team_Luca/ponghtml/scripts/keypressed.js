var keyPressed = {}
var pg = $('html')[0]

$(pg).on('keydown keyup', function(e) {
  // convert key code to the key name
  var keyName = keys[e.which]

  if (keyName) {
    // eg.: 'self.keyPressed.up = true' on keydown
    // will be set to 'false' on keyup
    self.keyPressed[keyName] = e.type === 'keydown'
    e.preventDefault()
  }
})

// Some key codes to key name mapping
keys = {
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
}
