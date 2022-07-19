export const PRACTITIONER: any = {
    "resourceType": "Bundle",
    "id": "6c7d22b9-f145-470c-ac6b-f4bce1a3be2b",
    "meta": {
        "versionId": "1",
        "lastUpdated": "2022-07-19T04:45:34.237-04:00"
    },
    "type": "searchset",
    "total": 1,
    "link": [{
        "relation": "self",
        "url": "https://wildfhir4.aegis.net/fhir4-0-1/Practitioner?_format=application%2Ffhir+json&_count=50&name=Careful"
    }],
    "entry": [{
        "fullUrl": "https://wildfhir4.aegis.net/fhir4-0-1/Practitioner/example",
        "resource": {
            "resourceType": "Practitioner",
            "id": "example",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2020-11-15T19:49:12.226-05:00",
                "security": [{
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
                    "code": "HTEST",
                    "display": "test health data"
                }]
            },
            "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>Dr Adam Careful is a Referring Practitioner for Acme Hospital from 1-Jan 2012 to 31-Mar        2012</p></div>"
            },
            "identifier": [{
                "system": "http://www.acme.org/practitioners",
                "value": "23"
            }],
            "active": true,
            "name": [{
                "family": "Careful",
                "given": ["Duck"],
                "prefix": ["Dr"]
            }],
            "address": [{
                "use": "home",
                "line": ["534 Erewhon St"],
                "city": "PleasantVille",
                "state": "Vic",
                "postalCode": "3999"
            }],
            "qualification": [{
                "identifier": [{
                    "system": "http://example.org/UniversityIdentifier",
                    "value": "12345"
                }],
                "code": {
                    "coding": [{
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0360/2.7",
                        "code": "BS",
                        "display": "Bachelor of Science"
                    }],
                    "text": "Bachelor of Science"
                },
                "period": {
                    "start": "1995"
                },
                "issuer": {
                    "display": "Example University"
                }
            }]
        },
        "search": {
            "mode": "match",
            "score": 1
        }
    }]
}