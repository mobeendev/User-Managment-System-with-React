const GROUPS = [
            {
                "id": 1,
                "name": "Gangs of NY",
                "created_at": "2019-07-17 10:09:22",
                "updated_at": "2019-07-17 10:09:22",
                "users": [
                    {
                        "id": 1,
                        "first_name": "Abdul",
                        "last_name": "Mobeen",
                        "city": "Doha",
                        "gender": "male",
                        "created_at": "2019-07-17 10:09:06",
                        "updated_at": "2019-07-17 10:09:06",
                        "pivot": {
                            "group_id": 1,
                            "user_id": 1
                        }
                    },
                    {
                        "id": 2,
                        "first_name": "Abdul",
                        "last_name": "Mobeen",
                        "city": "Doha",
                        "gender": "male",
                        "created_at": "2019-07-17 10:09:49",
                        "updated_at": "2019-07-17 10:09:49",
                        "pivot": {
                            "group_id": 1,
                            "user_id": 2
                        }
                    },
                    {
                        "id": 3,
                        "first_name": "jhon",
                        "last_name": "doe",
                        "city": "prague",
                        "gender": "male",
                        "created_at": "2020-02-12 10:20:21",
                        "updated_at": "2020-02-12 10:20:21",
                        "pivot": {
                            "group_id": 1,
                            "user_id": 3
                        }
                    }
                ]
            },
            {
                "id": 2,
                "name": "JS Hipster",
                "created_at": "2020-02-12 10:21:02",
                "updated_at": "2020-02-12 10:21:02",
                "users": [
                    {
                        "id": 1,
                        "first_name": "Abdul",
                        "last_name": "Mobeen",
                        "city": "Doha",
                        "gender": "male",
                        "created_at": "2019-07-17 10:09:06",
                        "updated_at": "2019-07-17 10:09:06",
                        "pivot": {
                            "group_id": 2,
                            "user_id": 1
                        }
                    },
                    {
                        "id": 4,
                        "first_name": "sarah",
                        "last_name": "turner",
                        "city": "newyork",
                        "gender": "female",
                        "created_at": "2020-02-12 10:20:50",
                        "updated_at": "2020-02-12 10:20:50",
                        "pivot": {
                            "group_id": 2,
                            "user_id": 4
                        }
                    }
                ]
            }
        ]

export default GROUPS;