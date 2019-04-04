const LinkSystemExtension = function() {};

LinkSystemExtension.prototype.getInfo = function() {
    return {
        id: "linksystem",
        name: "Linksystem",
        blocks: [
            {
                opcode: "getBrowserName",
                blockType: Scratch.BlockType.REPORTER,
                text: "Get Browser's Name",
            }
        ],

        // translation_map: {
        //     zh: {
        //         extensionName: "LinkSystem-Browser",
        //         getBrowserName: "浏览器"
        //     }
        // }
    };
};

LinkSystemExtension.prototype.getBrowserName = function(args) {
    return navigator.appVersion;
};

Scratch.extensions.register(new LinkSystemExtension());
