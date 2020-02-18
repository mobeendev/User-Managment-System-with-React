const USERS = [ 
 
            {
                "id": 1,
                "first_name": "Abdul",
                "last_name": "Mobeen",
                "city": "Doha",
                "gender": "male",
                "created_at": "2019-07-17 10:09:06",
                "updated_at": "2019-07-17 10:09:06",
                "groups": [
                    {
                        "id": 1,
                        "name": "SL-PHPBackend-V2",
                        "created_at": "2019-07-17 10:09:22",
                        "updated_at": "2019-07-17 10:09:22",
                        "pivot": {
                            "user_id": 1,
                            "group_id": 1
                        }
                    }
                ]
            },
            {
                "id": 2,
                "first_name": "Abdul",
                "last_name": "Mobeen",
                "city": "Doha",
                "gender": "male",
                "created_at": "2019-07-17 10:09:49",
                "updated_at": "2019-07-17 10:09:49",
                "groups": [
                    {
                        "id": 1,
                        "name": "SL-PHPBackend-V2",
                        "created_at": "2019-07-17 10:09:22",
                        "updated_at": "2019-07-17 10:09:22",
                        "pivot": {
                            "user_id": 2,
                            "group_id": 1
                        }
                    }
                ]
            },
            {
                "id": 3,
                "first_name": "jhon",
                "last_name": "doe",
                "city": "prague",
                "gender": "male",
                "created_at": "2020-02-12 10:20:21",
                "updated_at": "2020-02-12 10:20:21",
                "groups": [
                    {
                        "id": 1,
                        "name": "SL-PHPBackend-V2",
                        "created_at": "2019-07-17 10:09:22",
                        "updated_at": "2019-07-17 10:09:22",
                        "pivot": {
                            "user_id": 3,
                            "group_id": 1
                        }
                    }
                ]
            },
            {
                "id": 4,
                "first_name": "sarah",
                "last_name": "turner",
                "city": "newyork",
                "gender": "female",
                "created_at": "2020-02-12 10:20:50",
                "updated_at": "2020-02-12 10:20:50",
                "groups": [
                    {
                        "id": 2,
                        "name": "psycho",
                        "created_at": "2020-02-12 10:21:02",
                        "updated_at": "2020-02-12 10:21:02",
                        "pivot": {
                            "user_id": 4,
                            "group_id": 2
                        }
                    }
                ]
            }
        

];

export default USERS;
