var config = {
    settings: {
        selectionEnabled: false,
        closePopoutsOnUnload: true,
        showPopoutIcon: false,
        showMaximiseIcon: false,
        showCloseIcon: false,
    },
    content: [{
        type: 'row',
        content: [{
            type: 'component',
            componentName: 'view',
            title: 'file',
        }]
    }]
};


//
// Save Layout
//
var myLayout, savedState = localStorage.getItem('savedState');
if (savedState !== null) { myLayout = new GoldenLayout(JSON.parse(savedState)); }
else { myLayout = new GoldenLayout(config); }

myLayout.on('stateChanged', function () {
    var state = JSON.stringify(myLayout.toConfig());
    localStorage.setItem('savedState', state);
});


//
// Add duplicate button to header
//
myLayout.on('stackCreated', function (stack) {
    var btn = $('<li class="lm_duplicate">❏</li>');
    btn.click(function () {
        newItemConfig.title = 'file';
        myLayout.root.contentItems[0].addChild(newItemConfig);
    });
    stack.header.controlsContainer.prepend(btn);
});


// 
// Open file
//
var persistentComponent = function (container, state) {

    //
    // Create file-open button
    //
    var open_file_btn = document.createElement('label'),
        input = document.createElement('input');

    open_file_btn.appendChild(input);

    input.setAttribute('type', 'file');
    input.setAttribute('accept', '.pdf');
    input.setAttribute('style', 'display:none');
    input.setAttribute('id', 'open-file-input');

    open_file_btn.setAttribute('for', 'open-file-input');
    open_file_btn.setAttribute('style', 'cursor: pointer');
    open_file_btn.insertAdjacentText('afterbegin', '⇡');

    // Add to header
    myLayout.on('stackCreated', function (stack) {
        stack.header.controlsContainer.prepend(open_file_btn);
    });

    //
    // Save file name
    //
    if (!typeof window.localStorage) {
        container.getElement().append('<h2 class="err">Your browser doesn\'t support localStorage.</h2>');
        return;
    }

    const path_to_viewer = "./embed/pdfjs-2.3.200-dist/web/viewer.html?file=";

    if (state.fname) {
        container.getElement().html("<iframe src='" + path_to_viewer + state.fname + "', width='100%' height='100%'>");
    }
    input.addEventListener('change', e => {
        var files = e.target.files,
            fname = encodeURIComponent(String(files[0].name));

        container.getElement().html("<iframe src='" + path_to_viewer + fname + "', width='100%' height='100%'>");

        container.extendState({
            fname: fname,
        });
    });

};

myLayout.registerComponent('view', persistentComponent);



myLayout.init();

