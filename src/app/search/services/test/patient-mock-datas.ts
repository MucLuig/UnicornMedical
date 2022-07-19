export const PATIENT: any =
{
    "resourceType": "Bundle",
    "id": "e8d74be0-5206-44e9-a6a1-87bc33424dd0",
    "meta": {
        "versionId": "1",
        "lastUpdated": "2022-07-19T01:26:47.448-04:00"
    },
    "type": "searchset",
    "total": 8,
    "link": [{
        "relation": "self",
        "url": "https://wildfhir4.aegis.net/fhir4-0-1/Patient?_format=application%2Ffhir+json&_count=50&name=duck"
    }],
    "entry": [{
        "fullUrl": "https://wildfhir4.aegis.net/fhir4-0-1/Patient/pat1",
        "resource": {
            "resourceType": "Patient",
            "id": "pat1",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2020-11-15T19:49:14.627-05:00",
                "security": [{
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
                    "code": "HTEST",
                    "display": "test health data"
                }]
            },
            "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>Patient Donald DUCK @ Acme Healthcare, Inc. MR = 654321</p></div>"
            },
            "identifier": [{
                "use": "usual",
                "type": {
                    "coding": [{
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                        "code": "MR"
                    }]
                },
                "system": "urn:oid:0.1.2.3.4.5.6.7",
                "value": "654321"
            }],
            "active": true,
            "name": [{
                "use": "official",
                "family": "Donald",
                "given": ["Duck"]
            }],
            "gender": "male",
            "photo": [{
                "contentType": "image/gif",
                "data": "R0lGODlhEwARAPcAAAAAAAAA/+9aAO+1AP/WAP/eAP/eCP/eEP/eGP/nAP/nCP/nEP/nIf/nKf/nUv/nWv/vAP/vCP/vEP/vGP/vIf/vKf/vMf/vOf/vWv/vY//va//vjP/3c//3lP/3nP//tf//vf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAAEALAAAAAATABEAAAi+AAMIDDCgYMGBCBMSvMCQ4QCFCQcwDBGCA4cLDyEGECDxAoAQHjxwyKhQAMeGIUOSJJjRpIAGDS5wCDly4AALFlYOgHlBwwOSNydM0AmzwYGjBi8IHWoTgQYORg8QIGDAwAKhESI8HIDgwQaRDI1WXXAhK9MBBzZ8/XDxQoUFZC9IiCBh6wEHGz6IbNuwQoSpWxEgyLCXL8O/gAnylNlW6AUEBRIL7Og3KwQIiCXb9HsZQoIEUzUjNEiaNMKAAAA7"
            }],
            "contact": [{
                "relationship": [{
                    "coding": [{
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
                        "code": "E"
                    }]
                }],
                "organization": {
                    "reference": "Organization/1",
                    "display": "Walt Disney Corporation"
                }
            }],
            "managingOrganization": {
                "reference": "Organization/1",
                "display": "ACME Healthcare, Inc"
            },
            "link": [{
                "other": {
                    "reference": "Patient/pat2"
                },
                "type": "seealso"
            }]
        },
        "search": {
            "mode": "match",
            "score": 1
        }
    },
    {
        "fullUrl": "https://wildfhir4.aegis.net/fhir4-0-1/Patient/pat2",
        "resource": {
            "resourceType": "Patient",
            "id": "pat2",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2020-11-15T19:49:14.842-05:00",
                "security": [{
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
                    "code": "HTEST",
                    "display": "test health data"
                }]
            },
            "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>Patient Donald D DUCK @ Acme Healthcare, Inc. MR = 123456</p></div>"
            },
            "identifier": [{
                "use": "usual",
                "type": {
                    "coding": [{
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                        "code": "MR"
                    }]
                },
                "system": "urn:oid:0.1.2.3.4.5.6.7",
                "value": "123456"
            }],
            "active": true,
            "name": [{
                "use": "official",
                "family": "Donald",
                "given": ["Duck",
                    "D"]
            }],
            "gender": "other",
            "_gender": {
                "extension": [{
                    "url": "http://example.org/Profile/administrative-status",
                    "valueCodeableConcept": {
                        "coding": [{
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0001",
                            "code": "A",
                            "display": "Ambiguous"
                        }]
                    }
                }]
            },
            "photo": [{
                "contentType": "image/gif",
                "data": "R0lGODlhEwARAPcAAAAAAAAA/+9aAO+1AP/WAP/eAP/eCP/eEP/eGP/nAP/nCP/nEP/nIf/nKf/nUv/nWv/vAP/vCP/vEP/vGP/vIf/vKf/vMf/vOf/vWv/vY//va//vjP/3c//3lP/3nP//tf//vf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAAEALAAAAAATABEAAAi+AAMIDDCgYMGBCBMSvMCQ4QCFCQcwDBGCA4cLDyEGECDxAoAQHjxwyKhQAMeGIUOSJJjRpIAGDS5wCDly4AALFlYOgHlBwwOSNydM0AmzwYGjBi8IHWoTgQYORg8QIGDAwAKhESI8HIDgwQaRDI1WXXAhK9MBBzZ8/XDxQoUFZC9IiCBh6wEHGz6IbNuwQoSpWxEgyLCXL8O/gAnylNlW6AUEBRIL7Og3KwQIiCXb9HsZQoIEUzUjNEiaNMKAAAA7"
            }],
            "managingOrganization": {
                "reference": "Organization/1",
                "display": "ACME Healthcare, Inc"
            },
            "link": [{
                "other": {
                    "reference": "Patient/pat1"
                },
                "type": "seealso"
            }]
        },
        "search": {
            "mode": "match",
            "score": 1
        }
    },
    {
        "fullUrl": "https://wildfhir4.aegis.net/fhir4-0-1/Patient/6779d13516fc4f488da1fd276e545a7d",
        "resource": {
            "resourceType": "Patient",
            "id": "6779d13516fc4f488da1fd276e545a7d",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2022-04-23T07:00:33.560-04:00",
                "security": [{
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
                    "code": "HTEST",
                    "display": "test health data"
                }]
            },
            "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Touchstone Test Data - Patient: Bobby Highfever</div>"
            },
            "identifier": [{
                "system": "http://happyvalley.com/patient",
                "value": "410061349-151-56193740"
            }],
            "active": true,
            "name": [{
                "use": "official",
                "family": "DuckN4hPdz",
                "given": ["DonaldN4hPdz"]
            }],
            "gender": "male",
            "birthDate": "2002-04-23"
        },
        "search": {
            "mode": "match",
            "score": 1
        }
    },
    {
        "fullUrl": "https://wildfhir4.aegis.net/fhir4-0-1/Patient/ec8baba69cf1471885f33a8e3e139e14",
        "resource": {
            "resourceType": "Patient",
            "id": "ec8baba69cf1471885f33a8e3e139e14",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2022-05-13T14:25:14.514-04:00",
                "security": [{
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
                    "code": "HTEST",
                    "display": "test health data"
                }]
            },
            "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Touchstone Test Data - Patient: Bobby Highfever</div>"
            },
            "identifier": [{
                "system": "http://happyvalley.com/patient",
                "value": "975457342-511-56923663"
            }],
            "active": true,
            "name": [{
                "use": "official",
                "family": "Ducki7ZJ6u",
                "given": ["Donaldi7ZJ6u"]
            }],
            "gender": "male",
            "birthDate": "2002-05-13"
        },
        "search": {
            "mode": "match",
            "score": 1
        }
    },
    {
        "fullUrl": "https://wildfhir4.aegis.net/fhir4-0-1/Patient/2c1950e9729d4075824fdde37e1488e9",
        "resource": {
            "resourceType": "Patient",
            "id": "2c1950e9729d4075824fdde37e1488e9",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2022-05-13T14:25:14.811-04:00",
                "security": [{
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
                    "code": "HTEST",
                    "display": "test health data"
                }]
            },
            "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Touchstone Test Data - Patient: Bobby Highfever</div>"
            },
            "identifier": [{
                "system": "http://happyvalley.com/patient",
                "value": "975457342-511-56923663"
            }],
            "active": true,
            "name": [{
                "use": "official",
                "family": "Ducki7ZJ6u",
                "given": ["Donaldi7ZJ6u"]
            }],
            "gender": "male",
            "birthDate": "2002-05-13"
        },
        "search": {
            "mode": "match",
            "score": 1
        }
    },
    {
        "fullUrl": "https://wildfhir4.aegis.net/fhir4-0-1/Patient/b64371c8719f4b928d218d012f665b0b",
        "resource": {
            "resourceType": "Patient",
            "id": "b64371c8719f4b928d218d012f665b0b",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2022-06-08T16:24:19.844-04:00",
                "security": [{
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
                    "code": "HTEST",
                    "display": "test health data"
                }]
            },
            "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Touchstone Test Data - Patient: Bobby Highfever</div>"
            },
            "identifier": [{
                "system": "http://happyvalley.com/patient",
                "value": "139788738-638-23286614"
            }],
            "active": true,
            "name": [{
                "use": "official",
                "family": "DuckbiGisH",
                "given": ["DonaldbiGisH"]
            }],
            "gender": "male",
            "birthDate": "2002-06-08"
        },
        "search": {
            "mode": "match",
            "score": 1
        }
    },
    {
        "fullUrl": "https://wildfhir4.aegis.net/fhir4-0-1/Patient/bd2f39ed69ba46689cf33b7581c92bfe",
        "resource": {
            "resourceType": "Patient",
            "id": "bd2f39ed69ba46689cf33b7581c92bfe",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2022-06-16T05:37:24.785-04:00"
            },
            "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>identifier</b>: 999999      \n      </p><p><b>name</b>: Donald Badboy Duck       \n      </p><p><b>gender</b>: MALE      \n      </p><p><b>birthDate</b>: Nov 18, 2005      \n      </p></div>"
            },
            "identifier": [{
                "system": "http://acme.org/mrn",
                "value": "999999"
            }],
            "name": [{
                "family": "Duck",
                "given": ["Donald",
                    "Badboy"]
            }],
            "gender": "male",
            "birthDate": "2005-11-18"
        },
        "search": {
            "mode": "match",
            "score": 1
        }
    },
    {
        "fullUrl": "https://wildfhir4.aegis.net/fhir4-0-1/Patient/9f3dc52d01e54262b82c2f747e1ae953",
        "resource": {
            "resourceType": "Patient",
            "id": "9f3dc52d01e54262b82c2f747e1ae953",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2022-06-16T05:38:07.144-04:00"
            },
            "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>identifier</b>: 999999      \n      </p><p><b>name</b>: Donald Badboy Duck       \n      </p><p><b>gender</b>: MALE      \n      </p><p><b>birthDate</b>: Nov 18, 2005      \n      </p></div>"
            },
            "identifier": [{
                "system": "http://acme.org/mrn",
                "value": "999999"
            }],
            "name": [{
                "family": "Duck",
                "given": ["Donald",
                    "Badboy"]
            }],
            "gender": "male",
            "birthDate": "2005-11-18"
        },
        "search": {
            "mode": "match",
            "score": 1
        }
    }]
}
