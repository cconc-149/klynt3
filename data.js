klynt.data = {
    "mainSequence": "36E941DC-AC0D-2D06-3974-9FA345CE5EEF",
    "advanced": {
        "remoteVideosAPILocalBitrate": "best",
        "hasRemoteVideos": false,
        "enableKeyboardNavigation": true,
        "enableFullWindowMode": true,
        "enableScrollNavigation": true,
        "enableSwipeNavigation": true,
        "remoteVideosAPIURL": "http://api.klynt.net/video/klynt-video-api.php"
    },
    "sequences": {
        "EC8CF0D5-8A55-6EFB-514A-8027EAC2D2A8": {
            "color": "rgba(0,0,0,1)",
            "iframes": [
                {
                    "scales": true,
                    "duration": "00:31.00",
                    "centerX": "79.52",
                    "centerY": "9.99",
                    "dataend": "00:31.00",
                    "zIndex": 2,
                    "width": "587.09",
                    "code": "<!DOCTYPE html>\r<html>\r<head>\r    <title>Pulsantiera</title>\r\r    <style>\r        @import url(\"https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap\");\r\r        body {\r            background: black;\r            color: white;\r            font-family: \"Roboto Mono\", monospace;\r            margin: 0;\r            padding: 20px;\r            display: flex;\r            justify-content: center;\r            align-items: center;\r            height: 100vh;\r        }\r\r        .container {\r            max-width: 75%;\r            width: 500px;\r            text-align: center;\r        }\r\r        .title {\r            text-shadow: 0px 0px 20px #e0d48d, 0px 0px 10px #efec3a;\r            font-size: 40px;\r            margin-bottom: 30px;\r        }\r\r        .button-panel {\r            display: flex;\r            flex-direction: column;\r            align-items: center;\r            justify-content: center;\r            background-color: black;\r            border-radius: 8px;\r            padding: 5px;\r        }\r\r        .password-input {\r            padding: 15px;\r            margin-bottom: 20px;\r            font-size: 24px;\r            border-radius: 7px;\r            width: 100%;\r        }\r\r        .password-submit {\r            padding: 15px 30px;\r            margin-bottom: 20px;\r            font-size: 30px;\r            background-color: transparent;\r            color: #fff;\r            border-radius: 20px;\r            cursor: pointer;\r            width: 100%;\r            box-shadow: 0px 0px 10px #e0d48d, 0px 0px 5px #efec3a;\r            font-family: \"Roboto Mono\", monospace;\r        }\r\r        @media screen and (max-width: 768px) {\r            .container {\r                max-width: 90%;\r                width: 100%;\r            }\r\r            .title {\r                font-size: 34px;\r            }\r\r            .password-input {\r                font-size: 18px;\r            }\r\r            .password-submit {\r                font-size: 24px;\r            }\r        }\r\r    </style>\r\r\r</head>\r<body>\r<div class=\"container\">\r    <h1 id=\"title\" class=\"title\">Inserire password</h1>\r\r    <div id=\"buttonPanel\" class=\"button-panel\">\r        <input type=\"password\" id=\"passwordInput\" class=\"password-input\" placeholder=\"Enter password\">\r        <button id=\"submitButton\" class=\"password-submit\">invia</button>\r    </div>\r</div>\r<script src=\"https://cdn.jsdelivr.net/gh/Klynt/Klynt-Player/Player/js/api/KlyntAPI.js\"\r        type=\"text/javascript\"></script>\r<script>\r    const passwordInput = document.getElementById(\"passwordInput\");\r    const submitButton = document.getElementById(\"submitButton\");\r    submitButton.addEventListener(\"click\", openProject);\r\r    function openProject() {\r        const password = passwordInput.value;\r\r        if (password === \"511751\") {\r            KlyntAPI.commands.openSequence(\"B98C4FB6-F28A-076A-2C76-80A5D23659C3\"); // qr PCD\r        } else {\r            alert(\"PASSWORD ERRATA\");\r            console.log(\"risposta sbagliata\") // boh\r        }\r    }\r\r\r    // Animated title\r    const initialTitle = \"Inserire password\";\r    const titleElement = document.getElementById(\"title\");\r\r    setInterval(() => {\r        const randomString = generateRandomString(initialTitle.length);\r        titleElement.textContent = randomString;\r\r        setTimeout(() => {\r            titleElement.textContent = initialTitle;\r        }, 350);\r    }, 2000);\r\r\r    function generateRandomString(length) {\r        const characters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\r        let result = \"\";\r\r        for (let i = 0; i < length; i++) {\r            const randomIndex = Math.floor(Math.random() * characters.length);\r            result += characters.charAt(randomIndex);\r        }\r\r        return result;\r    }\r\r</script>\r\r</body>\r</html>\r",
                    "databegin": "00:00.00",
                    "height": "391.00",
                    "id": "39A2958C-80EF-DF60-7EDA-80A4867A81B9"
                }
            ],
            "duration": 30,
            "id": "EC8CF0D5-8A55-6EFB-514A-8027EAC2D2A8",
            "title": "pass",
            "images": [
                {
                    "zIndex": 0,
                    "mediaHeight": 853,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "dataend": "00:32.21",
                    "src": "Medias/Photos/Black_colour.jpg",
                    "scaleMode": "zoom",
                    "fitToWindow": true,
                    "mediaWidth": 640,
                    "duration": "00:32.21",
                    "name": "Black_colour.jpg",
                    "horizontalAlign": "center",
                    "databegin": "00:00.00",
                    "verticalAlign": "middle",
                    "id": "072B3111-4B1D-AA3F-166E-80C5A08DFA00"
                }
            ],
            "x": 1170.8833333333332,
            "size": "small",
            "y": 399,
            "backgroundColor": "rgba(0,0,0,0.75)",
            "hideInMindmap": true,
            "hideThumbnailInMindmap": false,
            "hideTitleInMindmap": false,
            "thumbnail": "Medias/Thumbnails/Black_colour.jpg.jpg"
        },
        "583FF81F-BFC6-BEDF-DCC4-7FBD9E9D1229": {
            "color": "rgba(0,0,0,1)",
            "duration": 3.577096885314022,
            "id": "583FF81F-BFC6-BEDF-DCC4-7FBD9E9D1229",
            "title": "Home",
            "x": 671.8,
            "videos": [
                {
                    "zIndex": 1,
                    "horizontalAlign": "center",
                    "src": [
                        {
                            "type": "video/mp4",
                            "src": "Medias/Videos/home4__1_.mp4"
                        }
                    ],
                    "id": "BBFF1E29-7138-097F-2DAD-9FADE123DE64",
                    "player": false,
                    "transitionOut": {
                        "type": "fade",
                        "duration": "2"
                    },
                    "poster": "Medias/Posters/home4__1_.mp4.jpg",
                    "loop": false,
                    "scaleMode": "zoom",
                    "fitToWindow": true,
                    "mediaWidth": 1920,
                    "duration": "00:03.47",
                    "volume": 1,
                    "name": "home4__1_.mp4",
                    "dataend": "00:03.47",
                    "mediaHeight": 1080,
                    "databegin": "00:00.00",
                    "autoplay": true,
                    "verticalAlign": "middle",
                    "frameRate": 0
                }
            ],
            "size": "medium",
            "y": 401,
            "backgroundColor": "rgba(0,0,0,0.75)",
            "hideInMindmap": false,
            "hideThumbnailInMindmap": false,
            "hideTitleInMindmap": false,
            "buttons": [
                {
                    "zIndex": 0,
                    "height": "54.00",
                    "type": "klynt-button-4",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "id": "75E987FB-B333-954F-44D9-7FF285B9ED8D",
                    "link": {
                        "hideArrowInMindmap": false,
                        "automaticTransition": true,
                        "targetSequence": "3A159310-178F-8996-EFBE-7FBDD56EDA74",
                        "hideInMindmap": true,
                        "linkType": "linkToSequence",
                        "controlDX": 0,
                        "transition": "fade",
                        "controlDY": 0,
                        "id": "CD509CDB-BDAB-2273-239D-7FF8006C4F75",
                        "color": "rgba(0,0,0,1)"
                    },
                    "scales": false,
                    "duration": "00:01.00",
                    "centerX": "-7.00",
                    "width": "210.00",
                    "databegin": "00:03.58",
                    "centerY": "250.00",
                    "label": "Inizia",
                    "dataend": "00:04.58"
                }
            ],
            "shapes": [
                {
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 2,
                    "duration": "00:09.02",
                    "type": "default",
                    "style": {
                        "backgroundColor": "rgba(233,66,77,0.01)"
                    },
                    "dataend": "00:09.02",
                    "databegin": "00:00.00",
                    "label": "Hotspot 1",
                    "id": "8178BDE8-79B3-91D3-9627-A4C93E745BF8",
                    "fitToWindow": true
                }
            ],
            "thumbnail": "Medias/Thumbnails/home.mp4.jpg"
        },
        "36E941DC-AC0D-2D06-3974-9FA345CE5EEF": {
            "color": "rgba(0,0,0,1)",
            "duration": 4.843522490673645,
            "id": "36E941DC-AC0D-2D06-3974-9FA345CE5EEF",
            "title": "Sequence 4",
            "images": [
                {
                    "zIndex": 0,
                    "mediaHeight": 636,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "dataend": "00:05.84",
                    "src": "Medias/Photos/Immagine_WhatsApp_2023-06-09_ore_12.04.39.jpg",
                    "scaleMode": "zoom",
                    "fitToWindow": true,
                    "mediaWidth": 1136,
                    "duration": "00:05.84",
                    "name": "Immagine_WhatsApp_2023-06-09_ore_12.04.39.jpg",
                    "horizontalAlign": "center",
                    "databegin": "00:00.00",
                    "verticalAlign": "middle",
                    "id": "31E4A0F4-9AAF-4137-E3A0-A4C431011A6E"
                }
            ],
            "x": 322.83333333333337,
            "size": "large",
            "y": 405,
            "backgroundColor": "rgba(0,0,0,1)",
            "hideInMindmap": false,
            "hideThumbnailInMindmap": false,
            "hideTitleInMindmap": false,
            "buttons": [
                {
                    "zIndex": 1,
                    "height": "60.00",
                    "type": "klynt-button-1",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "id": "1CD372CB-8316-9611-D546-A4C3D39E02E2",
                    "link": {
                        "hideArrowInMindmap": false,
                        "automaticTransition": false,
                        "targetSequence": "583FF81F-BFC6-BEDF-DCC4-7FBD9E9D1229",
                        "hideInMindmap": false,
                        "linkType": "linkToSequence",
                        "controlDX": 0,
                        "transition": "fade",
                        "controlDY": 0,
                        "id": "BBD0C58D-66DE-C309-F7CF-A4C4E8A6D048",
                        "color": "rgba(0,0,0,1)"
                    },
                    "scales": false,
                    "duration": "00:05.84",
                    "centerX": "-7.00",
                    "width": "200.00",
                    "databegin": "00:00.00",
                    "centerY": "245.00",
                    "label": "inizia",
                    "dataend": "00:05.84"
                }
            ],
            "thumbnail": "Medias/Thumbnails/Black_colour.jpg.jpg"
        },
        "3A159310-178F-8996-EFBE-7FBDD56EDA74": {
            "color": "rgba(0,0,0,1)",
            "duration": 8.023,
            "id": "3A159310-178F-8996-EFBE-7FBDD56EDA74",
            "title": "rgb",
            "images": [
                {
                    "zIndex": 0,
                    "mediaHeight": 2048,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "dataend": "00:25.60",
                    "src": "Medias/Photos/Solid_white_bordered.svg.png",
                    "scaleMode": "zoom",
                    "fitToWindow": true,
                    "mediaWidth": 2048,
                    "duration": "00:25.60",
                    "name": "Solid_white_bordered.svg.png",
                    "horizontalAlign": "center",
                    "databegin": "00:00.00",
                    "verticalAlign": "middle",
                    "id": "84A306CB-2275-42D0-1E5D-801EFCE016D5"
                }
            ],
            "x": 945.8333333333334,
            "videos": [
                {
                    "zIndex": 1,
                    "horizontalAlign": "center",
                    "src": [
                        {
                            "type": "video/mp4",
                            "src": "Medias/Videos/sfondo.mp4"
                        }
                    ],
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "id": "774C682F-70D2-5709-1998-804C517F7276",
                    "player": false,
                    "poster": "Medias/Posters/sfondo.mp4.jpg",
                    "loop": true,
                    "scaleMode": "zoom",
                    "fitToWindow": true,
                    "mediaWidth": 1920,
                    "duration": "00:16.54",
                    "volume": 1,
                    "name": "sfondo.mp4",
                    "dataend": "00:16.54",
                    "mediaHeight": 1080,
                    "databegin": "00:00.00",
                    "autoplay": true,
                    "verticalAlign": "middle",
                    "frameRate": 0
                },
                {
                    "zIndex": 1,
                    "horizontalAlign": "center",
                    "src": [
                        {
                            "type": "video/mp4",
                            "src": "Medias/Videos/sfondo.mp4"
                        }
                    ],
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "id": "E96704F7-C5F2-F796-8CDA-801EABD855A4",
                    "player": false,
                    "poster": "Medias/Posters/sfondo.mp4.jpg",
                    "loop": true,
                    "scaleMode": "zoom",
                    "fitToWindow": true,
                    "mediaWidth": 1920,
                    "duration": "00:16.54",
                    "volume": 1,
                    "name": "sfondo.mp4",
                    "dataend": "00:16.54",
                    "mediaHeight": 1080,
                    "databegin": "00:00.00",
                    "autoplay": true,
                    "verticalAlign": "middle",
                    "frameRate": 0
                },
                {
                    "right": "-7.00",
                    "bottom": "-102.00",
                    "src": [
                        {
                            "type": "video/mp4",
                            "src": "Medias/Videos/Enigma__2.mp4"
                        }
                    ],
                    "autoplay": true,
                    "id": "3A93F2EF-C523-40CD-F555-802493621133",
                    "player": false,
                    "poster": "Medias/Posters/Enigma__2.mp4.jpg",
                    "loop": true,
                    "left": "-7.00",
                    "scaleMode": "letterbox",
                    "top": "-103.00",
                    "syncMaster": true,
                    "scales": false,
                    "duration": "00:08.02",
                    "volume": 1,
                    "name": "Enigma__2.mp4",
                    "mediaWidth": 792,
                    "dataend": "00:08.02",
                    "mediaHeight": 1122,
                    "databegin": "00:00.00",
                    "zIndex": 2,
                    "frameRate": 0
                }
            ],
            "size": "small",
            "y": 401,
            "backgroundColor": "rgba(0,0,0,0.75)",
            "hideInMindmap": false,
            "hideThumbnailInMindmap": false,
            "hideTitleInMindmap": false,
            "buttons": [
                {
                    "zIndex": 4,
                    "databegin": "00:00.00",
                    "type": "klynt-button-3",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "4"
                    },
                    "id": "F229BC39-5A20-76E2-6A53-9B671476B581",
                    "right": "23.00",
                    "link": {
                        "hideArrowInMindmap": false,
                        "targetSequence": "EC8CF0D5-8A55-6EFB-514A-8027EAC2D2A8",
                        "closeButton": true,
                        "automaticClose": false,
                        "transition": "slideLeft",
                        "closeButtonRight": 16,
                        "color": "rgba(0,0,0,1)",
                        "automaticTransition": false,
                        "hideInMindmap": false,
                        "overlay": true,
                        "linkType": "linkToSequence",
                        "closeButtonTop": 16,
                        "controlDX": 0,
                        "pauseParent": false,
                        "controlDY": 0,
                        "id": "E5043F3B-4716-A794-7E87-9B694FE3B653"
                    },
                    "scales": false,
                    "duration": "00:09.02",
                    "width": "200.00",
                    "bottom": "30.00",
                    "height": "60.00",
                    "label": "risolvi",
                    "dataend": "00:09.02"
                }
            ],
            "shapes": [
                {
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 3,
                    "duration": "00:09.02",
                    "type": "default",
                    "style": {
                        "backgroundColor": "rgba(233,66,77,0.01)"
                    },
                    "dataend": "00:09.02",
                    "databegin": "00:00.00",
                    "label": "Hotspot 1",
                    "id": "BF5D8552-A137-5867-6526-9F647E4EB5B7",
                    "fitToWindow": true
                }
            ],
            "thumbnail": "Medias/Thumbnails/rgb_orizz.mp4.jpg"
        },
        "B98C4FB6-F28A-076A-2C76-80A5D23659C3": {
            "color": "rgba(0,0,0,1)",
            "duration": 5.543000000000001,
            "id": "B98C4FB6-F28A-076A-2C76-80A5D23659C3",
            "title": "qr",
            "images": [
                {
                    "zIndex": 0,
                    "mediaHeight": 853,
                    "dataend": "00:30.00",
                    "src": "Medias/Photos/Black_colour.jpg",
                    "scaleMode": "zoom",
                    "fitToWindow": true,
                    "mediaWidth": 640,
                    "duration": "00:30.00",
                    "name": "Black_colour.jpg",
                    "horizontalAlign": "center",
                    "databegin": "00:00.00",
                    "verticalAlign": "middle",
                    "id": "6A5FFE00-29E7-07D6-ED53-9105FF6F61B8"
                }
            ],
            "x": 1412,
            "videos": [
                {
                    "zIndex": 1,
                    "horizontalAlign": "center",
                    "src": [
                        {
                            "type": "video/mp4",
                            "src": "Medias/Videos/murazzi.mp4"
                        }
                    ],
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "id": "47C2F800-56CB-B305-CD54-9B1761A053AB",
                    "player": false,
                    "poster": "Medias/Posters/murazzi.mp4.jpg",
                    "loop": true,
                    "scaleMode": "zoom",
                    "fitToWindow": true,
                    "syncMaster": true,
                    "duration": "00:05.54",
                    "volume": 1,
                    "name": "murazzi.mp4",
                    "mediaWidth": 792,
                    "dataend": "00:05.54",
                    "mediaHeight": 1122,
                    "databegin": "00:00.00",
                    "autoplay": true,
                    "verticalAlign": "middle",
                    "frameRate": 0
                }
            ],
            "size": "medium",
            "y": 393,
            "backgroundColor": "rgba(0,0,0,1)",
            "hideInMindmap": true,
            "hideThumbnailInMindmap": false,
            "hideTitleInMindmap": false,
            "shapes": [
                {
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 2,
                    "duration": "00:06.54",
                    "type": "default",
                    "style": {
                        "backgroundColor": "rgba(233,66,77,0.01)"
                    },
                    "dataend": "00:06.54",
                    "databegin": "00:00.00",
                    "label": "Hotspot 1",
                    "id": "2690FCA4-91A8-CD3A-57CF-A4D2A256D7F4",
                    "fitToWindow": true
                }
            ],
            "thumbnail": "Medias/Thumbnails/Black_colour.jpg.jpg"
        }
    },
    "watermark": {
        "enabled": false,
        "position": "top-left",
        "image": "Player/css/editor/img/watermark.png",
        "displayOnStartSequence": true,
        "action": {
            "type": "openSequence",
            "target": "null"
        }
    },
    "wording": {
        "keywords": "mots-clés",
        "your_are_here": "Vous êtes ici",
        "total_duration": "(durée totale : {0})",
        "program_percentage_viewed": "du programme vu",
        "total_sequences": "séquences au total"
    },
    "miniPlayer": {
        "analyticsKey": "",
        "yesWording": "Yes",
        "redirectToMobileApp": "auto",
        "thanksForWatchingWording": "Thanks for watching!",
        "noWording": "No",
        "resumePlaybackWording": "Resume playback?",
        "downloadAppWording": "Download App",
        "launchAppWording": "Then Launch Project",
        "url": "",
        "title": "solv3 th1s",
        "fullscreenInfoWording": "This program will launch in fullscreen",
        "thumbnail": "Medias/Thumbnails/Black_colour.jpg.jpg",
        "description": ""
    },
    "aliases": {
        "aliasToId": {
            "pass": "EC8CF0D5-8A55-6EFB-514A-8027EAC2D2A8",
            "Sequence_4": "36E941DC-AC0D-2D06-3974-9FA345CE5EEF",
            "Home": "583FF81F-BFC6-BEDF-DCC4-7FBD9E9D1229",
            "qr": "B98C4FB6-F28A-076A-2C76-80A5D23659C3",
            "rgb": "3A159310-178F-8996-EFBE-7FBDD56EDA74"
        },
        "idToAlias": {
            "EC8CF0D5-8A55-6EFB-514A-8027EAC2D2A8": "pass",
            "583FF81F-BFC6-BEDF-DCC4-7FBD9E9D1229": "Home",
            "36E941DC-AC0D-2D06-3974-9FA345CE5EEF": "Sequence_4",
            "3A159310-178F-8996-EFBE-7FBDD56EDA74": "rgb",
            "B98C4FB6-F28A-076A-2C76-80A5D23659C3": "qr"
        }
    },
    "general": {
        "overlayCloseButtonRight": 16,
        "analyticsKey": "",
        "projectId": "7974AB6E-7643-78C9-EB10-9B7ED42684BE",
        "modificationDate": 1686484422850,
        "mapsKey": "",
        "creationDate": 1686235960358,
        "editorVersionLabel": "Klynt 3.5.007",
        "title": "solv3 th1s",
        "primaryColor": 3355443,
        "editorVersionNumber": "3.5.007",
        "username": "polito",
        "secondaryColor": 16777215,
        "author": "polito",
        "overlayCloseButtonTop": 16,
        "tertiaryColor": 15286861,
        "mainFontName": "Open Sans",
        "ratio": "16/9",
        "keywords": null,
        "mainFontSize": 14,
        "width": 970,
        "height": 545,
        "level": 5,
        "projectHost": "",
        "description": ""
    },
    "share": {
        "enableTumblr": true,
        "message": "",
        "customSizeWording": "Custom",
        "playerWording": "Player",
        "miniPlayerWording": "Mini player",
        "title": "",
        "shortMessage": "",
        "horizontalWording": "Horizontal",
        "shareSequenceWording": "Share sequence",
        "linkWording": "Link",
        "verticalWording": "Vertical",
        "socialNetworksWording": "Social Networks",
        "removeViaKlynt": true,
        "embedWording": "Embed",
        "link": null,
        "enableGooglePlus": true,
        "displayMiniPlayerWording": true,
        "enableLinkedIn": true,
        "thumbnail": null,
        "originalSizeWording": "Original"
    },
    "menu": {
        "backgroundImage": null,
        "displayBackgroundImage": false,
        "offset_sequence": 12,
        "searchWidget": "DEDA8070-352C-4CA5-9373-7FBD9E977D77",
        "widgets": [
            {
                "params": {
                    "sequences": [
                        "583FF81F-BFC6-BEDF-DCC4-7FBD9E9D1229",
                        "3A159310-178F-8996-EFBE-7FBDD56EDA74",
                        "EC8CF0D5-8A55-6EFB-514A-8027EAC2D2A8",
                        "B98C4FB6-F28A-076A-2C76-80A5D23659C3",
                        "36E941DC-AC0D-2D06-3974-9FA345CE5EEF"
                    ],
                    "displayDescriptions": true,
                    "layout": "grid",
                    "displayDuration": true
                },
                "type": "index",
                "label": "Index",
                "id": "456AFB0B-4023-C488-3779-7FBD9E970CBF"
            },
            {
                "params": {
                    "zoom": 2,
                    "maxZoom": 20,
                    "disableDefaultUI": true,
                    "sequences": [
                        "36E941DC-AC0D-2D06-3974-9FA345CE5EEF"
                    ],
                    "displayDescriptions": true,
                    "keyboardShortcuts": false,
                    "displayDuration": true,
                    "mapTypeId": "roadmap",
                    "minZoom": 0,
                    "center": [
                        30,
                        -30
                    ]
                },
                "type": "map",
                "label": "Map",
                "id": "A49951CD-B188-8EFA-1505-80F7218EAAF3"
            },
            {
                "params": {
                    "creditsColumnTitle": "Credits",
                    "creditsColumnText": "",
                    "subtitle": "",
                    "title": "solv3 th1s",
                    "aboutColumnTitle": "About",
                    "aboutColumnText": ""
                },
                "type": "credits",
                "label": "Credits",
                "id": "1AF444F3-723B-C4A9-B87D-7FBD9E9725EA"
            },
            {
                "placeHolderWording": "Type here...",
                "type": "search",
                "resultWording": "Result for: ",
                "resultsWording": "Results for: ",
                "enabled": true,
                "label": "Search",
                "id": "DEDA8070-352C-4CA5-9373-7FBD9E977D77"
            },
            {
                "displayDescriptions": false,
                "largeSequenceSize": 100,
                "displayWatermark": false,
                "mediumSequenceSize": 60,
                "displayLinksArrow": true,
                "smallSequenceSize": 25,
                "type": "mindmap",
                "label": "Mindmap",
                "id": "1AE147EE-45B8-BFDC-A038-7FBD9E977C2E"
            }
        ]
    }
}