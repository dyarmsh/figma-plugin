"use strict";
figma.showUI(__html__);
figma.ui.resize(500, 500);
figma.ui.onmessage = pluginMessage => {
    // finding the correct node
    const postComponentSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "post");
    const lightNoImg = postComponentSet.defaultVariant;
    const darkNoImg = figma.root.findOne(node => node.type == "COMPONENT" && node.name == "Image=none, Dark mode=true");
    const darkSingleImg = figma.root.findOne(node => node.type == "COMPONENT" && node.name == "Image=single, Dark mode=true");
    const lightSingleImg = figma.root.findOne(node => node.type == "COMPONENT" && node.name == "Image=single, Dark mode=false");
    const darkCarousel = figma.root.findOne(node => node.type == "COMPONENT" && node.name == "Image=carousel, Dark mode=true");
    const lightCarousel = figma.root.findOne(node => node.type == "COMPONENT" && node.name == "Image=carousel, Dark mode=false");
    console.log(pluginMessage.name);
    console.log(pluginMessage.username);
    console.log(pluginMessage.description);
    console.log(pluginMessage.darkModeState);
    console.log(pluginMessage.imageVariant);
    switch (pluginMessage.darkModeState) {
        case true:
            switch (pluginMessage.imageVariant) {
                case "1":
                    darkNoImg.createInstance();
                    break;
                case "2":
                    darkSingleImg.createInstance();
                    break;
                case "3":
                    darkCarousel.createInstance();
                    break;
            }
            break;
        case false:
            switch (pluginMessage.imageVariant) {
                case "1":
                    lightNoImg.createInstance();
                    break;
                case "2":
                    lightSingleImg.createInstance();
                    break;
                case "3":
                    lightCarousel.createInstance();
                    break;
            }
            break;
    }
    figma.closePlugin();
};
