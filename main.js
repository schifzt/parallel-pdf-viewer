var config = {
    settings: {
        selectionEnabled: false,
        closePopoutsOnUnload: true,
        showPopoutIcon: false,
        showMaximiseIcon: true,
        showCloseIcon: true,
    },
    content: [{
        type: 'row',
        content: [{
            type: 'component',
            componentName: 'viewerComponent',
            title: 'file://',
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

    // Save file name
    if (!typeof window.localStorage) {
        container.getElement().append('<h2 class="err">Your browser doesn\'t support localStorage.</h2>');
        return;
    }

    const path_to_viewer = "./embed/pdfjs-2.3.200-dist/web/viewer.html?file=";

    if (state.fname) {
        container.getElement().html("<iframe id='iframe-viewer' src='" + path_to_viewer + state.fname + "' width='100%' height='100%'>");
    } else {

        // Create file-open button
        var label = document.createElement('label'),
            input = document.createElement('input');

        input.setAttribute('type', 'file');
        input.setAttribute('accept', '.pdf');
        input.setAttribute('id', 'open-file-input');

        label.appendChild(input);
        label.setAttribute('for', 'open-file-input');
        label.setAttribute('style', 'cursor: pointer');
        label.insertAdjacentText('afterbegin', '');

        container.getElement().html(label);

        input.addEventListener('change', e => {
            var files = e.target.files,
                fname = encodeURIComponent(String(files[0].name));

            container.getElement().html("<iframe id='iframe-viewer' src='" + path_to_viewer + fname + "' width='100%' height='100%'>");

            container.extendState({
                fname: fname,
            });
        });

    }
};

myLayout.registerComponent('viewerComponent', persistentComponent);

myLayout.init();

window.onload = function () {
}


