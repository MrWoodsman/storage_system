var database = {
    items: [
        {
            "id": "7128-8912-7890-2802",
            "name": "Długopis",
            "boxId": "7127-1787-8127-2718",
            "count": 2
        },
        {
            "id": "2657-8317-7890-1732",
            "name": "Zeszyt",
            "boxId": "7127-1787-8127-2718",
            "count": 1
        }
    ],
    boxes: [
        {
            "id": "7127-1787-8127-2718",
            "name": "Testowe pudełko",
            "locationId": "6127-8712-6217-2718",
            "content": [
                "7128-8912-7890-2802",
                "2657-8317-7890-1732"
            ]
        },
        {
            "id": "7127-7181-6282-1272",
            "name": "Karton tymczasowy",
            "locationId": "6127-8712-6217-2718",
            "content": []
        },
        {
            "id": "7127-1787-8127-6817",
            "name": "Szafa",
            "locationId": null,
            "content": []
        }
    ],
    locations: [
        {
            'id': "6127-8712-6217-2718",
            'name': "Przedpokój",
        },
        {
            'id': "6127-8712-6217-8124",
            'name': "Pokój #1",
        }
    ],
}

module.exports = { database }