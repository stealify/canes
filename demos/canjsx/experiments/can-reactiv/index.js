var most = require('most')


function start(view,defineMap) {
    // Convert defineMap to Stream
    return most.of(stache.render(view,defineMap))

}
