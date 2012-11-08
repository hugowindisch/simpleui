exports.groups = {
    "Map": {
        "description": "A googlemaps map",
        "private": true,
        "privateTheme": true,
        "dimensions": [
            600,
            400,
            1
        ],
        "gridSize": 8,
        "children": {
            "map": {
                "factory": "domvisual",
                "type": "DOMElement",
                "config": {
                    "position": "map",
                    "innerHTML": ""
                }
            }
        },
        "positions": {
            "map": {
                "matrix": [
                    600,
                    0,
                    0,
                    0,
                    0,
                    400,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "order": 0,
                "snapping": {
                    "left": "px",
                    "right": "px",
                    "width": "auto",
                    "top": "px",
                    "bottom": "px",
                    "height": "auto"
                }
            }
        },
        "theme": {}
    },
    "Portfolio": {
        "description": "A grid of images",
        "private": false,
        "privateTheme": true,
        "dimensions": [
            600,
            400,
            1
        ],
        "gridSize": 8,
        "children": {},
        "positions": {},
        "theme": {},
        "overflowX": "visible",
        "overflowY": "visible",
        "privateVisual": false,
        "privateStyles": false
    },
    "Image": {
        "description": "An image with an optional link",
        "private": true,
        "privateTheme": true,
        "dimensions": [
            600,
            400,
            1
        ],
        "gridSize": 8,
        "children": {},
        "positions": {},
        "theme": {},
        "overflowX": "visible",
        "overflowY": "visible",
        "privateVisual": false,
        "privateStyles": false
    },
    "ImagePicker": {
        "description": "",
        "private": true,
        "privateTheme": true,
        "dimensions": [
            472,
            72,
            1
        ],
        "gridSize": 8,
        "children": {},
        "positions": {
            "sm2": {
                "matrix": [
                    56,
                    0,
                    0,
                    0,
                    0,
                    56,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    71.99998474121094,
                    7.999996662139893,
                    0,
                    1
                ],
                "order": 1,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            },
            "sm3": {
                "matrix": [
                    56,
                    0,
                    0,
                    0,
                    0,
                    56,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    7.999988555908203,
                    7.999996662139893,
                    0,
                    1
                ],
                "order": 0,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            },
            "sm1": {
                "matrix": [
                    56,
                    0,
                    0,
                    0,
                    0,
                    56,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    135.99998474121094,
                    7.999996662139893,
                    0,
                    1
                ],
                "order": 2,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            },
            "s": {
                "matrix": [
                    72,
                    0,
                    0,
                    0,
                    0,
                    72,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    199.99998474121094,
                    -0.0000033974647521972656,
                    0,
                    1
                ],
                "order": 3,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            },
            "sp1": {
                "matrix": [
                    56,
                    0,
                    0,
                    0,
                    0,
                    56,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    280,
                    7.999996662139893,
                    0,
                    1
                ],
                "order": 4,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            },
            "sp2": {
                "matrix": [
                    56,
                    0,
                    0,
                    0,
                    0,
                    56,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    344,
                    7.999996662139893,
                    0,
                    1
                ],
                "order": 5,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            },
            "sp3": {
                "matrix": [
                    56,
                    0,
                    0,
                    0,
                    0,
                    56,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    408,
                    7.999996662139893,
                    0,
                    1
                ],
                "order": 6,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            },
            "sm4": {
                "matrix": [
                    56.000003814697266,
                    0,
                    0,
                    0,
                    0,
                    56,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    -56,
                    8,
                    0,
                    1
                ],
                "order": 7,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            },
            "sp4": {
                "matrix": [
                    56.000003814697266,
                    0,
                    0,
                    0,
                    0,
                    56,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    472,
                    8,
                    0,
                    1
                ],
                "order": 8,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            }
        },
        "theme": {},
        "overflowX": "visible",
        "overflowY": "visible",
        "privateVisual": false,
        "privateStyles": false
    },
    "Button": {
        "description": "A button",
        "private": true,
        "privateTheme": true,
        "dimensions": [
            600,
            400,
            1
        ],
        "gridSize": 8,
        "children": {
            "label": {
                "factory": "domvisual",
                "type": "DOMElement",
                "config": {
                    "position": "label",
                    "innerText": "",
                    "style": "label"
                }
            },
            "background": {
                "factory": "domvisual",
                "type": "DOMElement",
                "config": {
                    "position": "background",
                    "innerText": "",
                    "style": "normal"
                }
            }
        },
        "positions": {
            "label": {
                "matrix": [
                    568,
                    0,
                    0,
                    0,
                    0,
                    368,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    16,
                    16,
                    0,
                    1
                ],
                "order": 1,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            },
            "background": {
                "matrix": [
                    600,
                    0,
                    0,
                    0,
                    0,
                    400,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "order": 0,
                "snapping": {
                    "left": "px",
                    "right": "px",
                    "width": "auto",
                    "top": "px",
                    "bottom": "px",
                    "height": "auto"
                }
            }
        },
        "theme": {
            "highlight": {
                "jsData": {
                    "backgroundImage": [
                        {
                            "colors": [
                                {
                                    "r": 255,
                                    "g": 255,
                                    "b": 255,
                                    "a": 1
                                },
                                {
                                    "r": 200,
                                    "g": 200,
                                    "b": 200,
                                    "a": 1
                                }
                            ],
                            "stops": [
                                1,
                                0.035
                            ],
                            "type": "vertical"
                        }
                    ],
                    "backgroundSize": [
                        null
                    ],
                    "backgroundRepeat": [
                        null
                    ],
                    "borderTopLeftRadius": 20,
                    "borderTopRightRadius": 20,
                    "borderBottomLeftRadius": 20,
                    "borderBottomRightRadius": 20,
                    "boxShadow": {
                        "offsetX": 0,
                        "offsetY": 0,
                        "blurRadius": 20,
                        "spreadRadius": 0,
                        "color": {
                            "r": 0,
                            "g": 0,
                            "b": 119.53125,
                            "a": 1
                        }
                    }
                }
            },
            "normal": {
                "jsData": {
                    "backgroundImage": [
                        {
                            "colors": [
                                {
                                    "r": 255,
                                    "g": 255,
                                    "b": 255,
                                    "a": 1
                                },
                                {
                                    "r": 200,
                                    "g": 200,
                                    "b": 200,
                                    "a": 1
                                }
                            ],
                            "stops": [
                                1,
                                0
                            ],
                            "type": "vertical"
                        }
                    ],
                    "backgroundSize": [
                        null
                    ],
                    "backgroundRepeat": [
                        null
                    ],
                    "borderTopLeftRadius": 20,
                    "borderTopRightRadius": 20,
                    "borderBottomLeftRadius": 20,
                    "borderBottomRightRadius": 20,
                    "boxShadow": {
                        "offsetX": 0,
                        "offsetY": 0,
                        "blurRadius": 20,
                        "spreadRadius": 0,
                        "color": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        }
                    }
                }
            },
            "pressed": {
                "jsData": {
                    "backgroundImage": [
                        {
                            "colors": [
                                {
                                    "r": 255,
                                    "g": 255,
                                    "b": 255,
                                    "a": 1
                                },
                                {
                                    "r": 160,
                                    "g": 160,
                                    "b": 160,
                                    "a": 1
                                }
                            ],
                            "stops": [
                                1,
                                0
                            ],
                            "type": "vertical"
                        }
                    ],
                    "backgroundSize": [
                        null
                    ],
                    "backgroundRepeat": [
                        null
                    ],
                    "borderTopLeftRadius": 20,
                    "borderTopRightRadius": 20,
                    "borderBottomLeftRadius": 20,
                    "borderBottomRightRadius": 20
                }
            },
            "label": {
                "jsData": {
                    "fontFamily": "sans-serif",
                    "fontSize": 20,
                    "textAlign": "center"
                }
            }
        },
        "overflowX": "visible",
        "overflowY": "visible",
        "privateVisual": false,
        "privateStyles": false
    },
    "TwitterTweet": {
        "description": "A Twitter Tweet button",
        "private": false,
        "privateTheme": true,
        "dimensions": [
            120,
            25,
            1
        ],
        "gridSize": 8,
        "children": {},
        "positions": {},
        "theme": {},
        "overflowX": "visible",
        "overflowY": "visible",
        "privateVisual": false,
        "privateStyles": false
    },
    "FramedImage": {
        "description": "An image with a white frame",
        "private": false,
        "privateTheme": true,
        "dimensions": [
            600,
            400,
            1
        ],
        "gridSize": 8,
        "children": {
            "image": {
                "factory": "domvisual",
                "type": "DOMImg",
                "config": {
                    "position": "image"
                }
            },
            "background": {
                "factory": "domvisual",
                "type": "DOMElement",
                "config": {
                    "position": "background",
                    "innerText": "",
                    "style": "frame"
                }
            }
        },
        "positions": {
            "image": {
                "matrix": [
                    568,
                    0,
                    0,
                    0,
                    0,
                    368,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    16,
                    16,
                    0,
                    1
                ],
                "order": 1,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            },
            "background": {
                "matrix": [
                    600,
                    0,
                    0,
                    0,
                    0,
                    400,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "order": 0,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            }
        },
        "theme": {
            "frame": {
                "jsData": {
                    "backgroundColor": {
                        "r": 255,
                        "g": 255,
                        "b": 255,
                        "a": 1
                    },
                    "boxShadow": {
                        "offsetX": 0,
                        "offsetY": 0,
                        "blurRadius": 10,
                        "spreadRadius": 0,
                        "color": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        }
                    }
                }
            }
        },
        "overflowX": "visible",
        "overflowY": "visible",
        "privateVisual": false,
        "privateStyles": false
    },
    "FacebookLike": {
        "description": "A facebook Like button",
        "private": false,
        "privateTheme": true,
        "dimensions": [
            450,
            30,
            1
        ],
        "gridSize": 8,
        "children": {},
        "positions": {},
        "theme": {},
        "overflowX": "visible",
        "overflowY": "visible",
        "privateVisual": false,
        "privateStyles": false
    },
    "Slideshow": {
        "description": "An animated slideshow",
        "private": false,
        "privateTheme": true,
        "dimensions": [
            600,
            400,
            1
        ],
        "gridSize": 8,
        "children": {},
        "positions": {
            "center": {
                "matrix": [
                    600,
                    0,
                    0,
                    0,
                    0,
                    400,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "order": 0,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            },
            "left": {
                "matrix": [
                    600,
                    0,
                    0,
                    0,
                    0,
                    400,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    -600,
                    0,
                    0,
                    1
                ],
                "order": 3,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            },
            "bottom": {
                "matrix": [
                    600,
                    0,
                    0,
                    0,
                    0,
                    400,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    400,
                    0,
                    1
                ],
                "order": 2,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            },
            "right": {
                "matrix": [
                    600,
                    0,
                    0,
                    0,
                    0,
                    400,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    600,
                    0,
                    0,
                    1
                ],
                "order": 1,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            },
            "top": {
                "matrix": [
                    600,
                    0,
                    0,
                    0,
                    0,
                    400,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    -400,
                    0,
                    1
                ],
                "order": 4,
                "snapping": {
                    "left": "%",
                    "right": "%",
                    "width": "auto",
                    "top": "%",
                    "bottom": "%",
                    "height": "auto"
                }
            }
        },
        "theme": {},
        "overflowX": "visible",
        "overflowY": "visible",
        "privateVisual": false,
        "privateStyles": false
    },
    "FullScreenSlideshow": {
        "description": "",
        "private": true,
        "privateTheme": true,
        "dimensions": [
            600,
            400,
            0
        ],
        "gridSize": 8,
        "children": {
            "picker": {
                "factory": "simpleui",
                "type": "ImagePicker",
                "config": {
                    "position": "picker"
                }
            },
            "image": {
                "factory": "simpleui",
                "type": "Image",
                "config": {
                    "position": "image"
                }
            },
            "background": {
                "factory": "domvisual",
                "type": "DOMElement",
                "config": {
                    "position": "background",
                    "innerText": "",
                    "style": "background"
                }
            },
            "previous": {
                "factory": "domvisual",
                "type": "DOMElement",
                "config": {
                    "position": "previous",
                    "innerText": "",
                    "style": "left"
                }
            },
            "next": {
                "factory": "domvisual",
                "type": "DOMElement",
                "config": {
                    "position": "next",
                    "innerText": "",
                    "style": "right"
                }
            },
            "close": {
                "factory": "domvisual",
                "type": "DOMElement",
                "config": {
                    "position": "close",
                    "innerText": "",
                    "style": "close"
                }
            }
        },
        "positions": {
            "picker": {
                "matrix": [
                    448,
                    0,
                    0,
                    0,
                    0,
                    72,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    72,
                    304,
                    0,
                    1
                ],
                "order": 1,
                "snapping": {
                    "left": "px",
                    "right": "px",
                    "width": "auto",
                    "top": "auto",
                    "bottom": "px",
                    "height": "px"
                }
            },
            "image": {
                "matrix": [
                    448,
                    0,
                    0,
                    0,
                    0,
                    224,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    72,
                    56,
                    0,
                    1
                ],
                "order": 2,
                "snapping": {
                    "left": "px",
                    "right": "px",
                    "width": "auto",
                    "top": "px",
                    "bottom": "px",
                    "height": "auto"
                }
            },
            "background": {
                "matrix": [
                    600,
                    0,
                    0,
                    0,
                    0,
                    400,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ],
                "order": 0,
                "snapping": {
                    "left": "px",
                    "right": "px",
                    "width": "auto",
                    "top": "px",
                    "bottom": "px",
                    "height": "auto"
                },
                "enableSelect": true
            },
            "previous": {
                "matrix": [
                    31.999998092651367,
                    0,
                    0,
                    0,
                    0,
                    31.999996185302734,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    480,
                    8.000003814697266,
                    0,
                    1
                ],
                "order": 3,
                "snapping": {
                    "left": "auto",
                    "right": "px",
                    "width": "px",
                    "top": "px",
                    "bottom": "auto",
                    "height": "px"
                }
            },
            "next": {
                "matrix": [
                    32,
                    0,
                    0,
                    0,
                    0,
                    32,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    520,
                    8,
                    0,
                    1
                ],
                "order": 4,
                "snapping": {
                    "left": "auto",
                    "right": "px",
                    "width": "px",
                    "top": "px",
                    "bottom": "auto",
                    "height": "px"
                }
            },
            "close": {
                "matrix": [
                    32,
                    0,
                    0,
                    0,
                    0,
                    32,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    560,
                    8,
                    0,
                    1
                ],
                "order": 5,
                "snapping": {
                    "left": "auto",
                    "right": "px",
                    "width": "px",
                    "top": "px",
                    "bottom": "auto",
                    "height": "px"
                }
            }
        },
        "theme": {
            "left": {
                "jsData": {
                    "backgroundImage": [
                        "simpleui/img/left.png"
                    ],
                    "backgroundSize": [
                        {
                            "size": [
                                "percent",
                                "percent"
                            ],
                            "value": [
                                100,
                                100
                            ]
                        }
                    ],
                    "backgroundRepeat": [
                        {
                            "repeat": [
                                "no-repeat",
                                "no-repeat"
                            ]
                        }
                    ]
                }
            },
            "right": {
                "jsData": {
                    "backgroundImage": [
                        "simpleui/img/right.png"
                    ],
                    "backgroundSize": [
                        {
                            "size": [
                                "percent",
                                "percent"
                            ],
                            "value": [
                                100,
                                100
                            ]
                        }
                    ],
                    "backgroundRepeat": [
                        {
                            "repeat": [
                                "no-repeat",
                                "no-repeat"
                            ]
                        }
                    ]
                }
            },
            "close": {
                "jsData": {
                    "backgroundImage": [
                        "simpleui/img/close.png"
                    ],
                    "backgroundSize": [
                        {
                            "size": [
                                "percent",
                                "percent"
                            ],
                            "value": [
                                100,
                                100
                            ]
                        }
                    ],
                    "backgroundRepeat": [
                        {
                            "repeat": [
                                "no-repeat",
                                "no-repeat"
                            ]
                        }
                    ]
                }
            },
            "background": {
                "jsData": {
                    "backgroundColor": {
                        "r": 0,
                        "g": 0,
                        "b": 0,
                        "a": 0.44375
                    }
                }
            }
        },
        "overflowX": "visible",
        "overflowY": "visible"
    }
};

/**
    Exports all visual constructors in the specified module.
*/

exports.Map = require('/simpleui/lib/Map').Map;

exports.Portfolio = require('/simpleui/lib/Portfolio').Portfolio;

exports.Image = require('/simpleui/lib/Image').Image;

exports.ImagePicker = require('/simpleui/lib/ImagePicker').ImagePicker;

exports.Button = require('/simpleui/lib/Button').Button;

exports.TwitterTweet = require('/simpleui/lib/TwitterTweet').TwitterTweet;

exports.FramedImage = require('/simpleui/lib/FramedImage').FramedImage;

exports.FacebookLike = require('/simpleui/lib/FacebookLike').FacebookLike;

exports.Slideshow = require('/simpleui/lib/Slideshow').Slideshow;

exports.FullScreenSlideshow = require('/simpleui/lib/FullScreenSlideshow').FullScreenSlideshow;

exports.Portfolio = require('/simpleui/lib/Portfolio').Portfolio;
