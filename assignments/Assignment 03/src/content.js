function Content(element) {
    element.value = `[
        {
            "type": "group",
            "name": "Friends",
            "items": [
                {
                    "type": "group",
                    "name": "Best Friends",
                    "items": [
                        {
                            "type": "user",
                            "name": "Tommy"
                        }
                    ]
                },
                {
                    "type": "user",
                    "name": "Udi"
                }
            ]
        },
            {
                "type": "user",
                "name": "Ori"
            },
            {
                "type": "user",
                "name": "Roni"
            }
        ]`;

    function get() {
        const res = JSON.parse(element.value);
        return res;
    }

    return {
        get,
    };
}
