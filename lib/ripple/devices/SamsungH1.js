/*
 *  Copyright 2011 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = {
    "id": "SamsungH1",
    "name": "Samsung H1 (touch)",
    "manufacturer": "Samsung",
    "model": "H1",
    "firmware": "i8320BUIJ6",
    "osName": "LiMo",
    "osVersion": "n/a",

    "screen": {
        "width": 480,
        "height": 800
    },
    "viewPort": {
        "portrait": {
            "width": 480,
            "height": 800,
            "paddingTop": 0,
            "paddingLeft": 0
        }
    },

    "overrides": {
        "api": {
            "vodafone": {
                "viewPort": {
                    "portrait": {
                        "width": 480,
                        "height": 684,
                        "paddingTop": 116,
                        "paddingLeft": 0
                    }
                }
            }
        }
    },

    "ppi": 265,
    "browser": ["Webkit"],
    "userAgent": "?",
    "platforms": ["web", "wac", "vodafone"]
};
