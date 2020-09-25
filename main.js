var config = {
    content: [{
        type: 'row',
        content: [{
            type: 'component',
            componentName: 'testComponent',
            componentState: { label: 'A' }
        }, {
            type: 'column',
            content: [{
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'B' }
            }, {
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'C' }
            }]
        }]
    }]
};


var myLayout, savedState = localStorage.getItem('savedState');
if (savedState !== null) { myLayout = new GoldenLayout(JSON.parse(savedState)); }
else { myLayout = new GoldenLayout(config); }

myLayout.on('stateChanged', function () {
    var state = JSON.stringify(myLayout.toConfig());
    localStorage.setItem('savedState', state);
});

myLayout.registerComponent('testComponent', function (container, componentState) {
    container.getElement().html("<iframe src='./embed/pdfjs-2.3.200-dist/web/viewer.html', width='100%' height='100%'>");
});

myLayout.init();

