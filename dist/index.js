import React, { useState } from 'react';
/* styling for the root container */
var rootStyle = {
    position: 'relative',
    height: '100%',
    width: '100%',
};
/* styling for the topmost bar containing the labels */
var tabsContainerStyle = {
    backgroundColor: '#e8e1e2',
    border: '1px solid #dcd6d7',
    display: 'inline-block',
    borderRadius: '5px',
    height: '20px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
};
/* style for the active tab */
var tabActiveStyle = {
    backgroundColor: 'white',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
};
/* remove default button styling from button in tabContainer */
var buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    height: '20px',
    verticalAlign: 'top',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.8em',
    paddingLeft: '12px',
    paddingRight: '12px',
};
var buttonContainerStyle = {
    display: 'inline-block',
    verticalAlign: 'top',
};
/* styling for separators in between labels */
var separatorStyle = {
    height: '14px',
    marginTop: '3px',
    width: '1px',
    backgroundColor: '#d0cacb',
    display: 'inline-block',
};
/* root container for tab bodies */
var bodyContainerStyle = {
    position: 'relative',
    top: '10px',
    backgroundColor: '#f0ebec',
    border: '1px solid #e2dbdc',
    width: '100%',
    height: 'calc(100% - 10px)',
    zIndex: 0,
    borderRadius: '5px',
};
/* ensures body content stays below tabContainer */
var bodyPadStyle = {
    marginTop: '10px',
};
export default function OsxTabs(props) {
    var tabLabels = props.tabLabels, tabBodies = props.tabBodies;
    var _a = useState(0), selectedIndex = _a[0], setSelectedIndex = _a[1];
    if (tabLabels.length !== tabBodies.length)
        throw new Error('tabLabels and tabBodies must be the same length!');
    return (React.createElement("div", { style: rootStyle },
        React.createElement("div", { style: tabsContainerStyle }, tabLabels.map(function (lbl, idx) {
            var bStyle = {};
            Object.assign(bStyle, buttonStyle);
            if (selectedIndex === idx)
                Object.assign(bStyle, tabActiveStyle);
            return (React.createElement("div", { key: lbl, style: buttonContainerStyle },
                React.createElement("button", { style: bStyle, onClick: function () { return setSelectedIndex(idx); } }, lbl),
                idx !== tabLabels.length - 1 ? (React.createElement("div", { style: separatorStyle })) : null));
        })),
        React.createElement("div", { style: bodyContainerStyle },
            React.createElement("div", { style: bodyPadStyle }, tabBodies[selectedIndex]))));
}
