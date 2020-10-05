var config = {
    content: [{
        type: 'row',
        content: [{
            type: 'component',
            componentName: 'viewerComponent',
            title: 'file://',
        }, {
            type: 'column',
            content: [{
                type: 'component',
                componentName: 'viewerComponent',
                title: 'file://',
            }, {
                type: 'component',
                componentName: 'viewerComponent',
                title: 'file://',
            }]
        }]
    }]
};


//
// Save Layout
//
var myLayout, savedState = localStorage.getItem('savedState');
if (savedState !== null) { myLayout = new GoldenLayout(JSON.parse(savedState)); }
else { myLayout = new window.GoldenLayout(config); }

myLayout.on('stateChanged', function () {
    var state = JSON.stringify(myLayout.toConfig());
    localStorage.setItem('savedState', state);
});


//
// Add duplicate button to header
//
myLayout.on('stackCreated', function (stack) {
    var btn2 = $('<li class="lm_duplicate">❏</li>');
    stack.header.controlsContainer.prepend(btn2);

    var newItemConfig = {
        type: 'component',
        componentName: 'viewerComponent',
        title: 'file://',
    };

    btn2.click(function () {
        myLayout.root.contentItems[0].addChild(newItemConfig);
    });

});


// 
// Open file
//
var persistentComponent = function (container, state) {
    const path_to_viewer = "./pdfjs/web/viewer.html" + "?file=";
    const fname = "main.pdf";

    container.getElement().html(
        "<iframe id='iframe-viewer' src='" + path_to_viewer + fname + "#zoom=auto" + "' width='100%' height='100%'>"
    );

};

myLayout.registerComponent('viewerComponent', persistentComponent);

myLayout.init();

window.onload = function () {
}


