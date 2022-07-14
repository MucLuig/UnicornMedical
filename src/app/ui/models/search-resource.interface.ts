import { FhirSearchFn } from "@red-probeaufgabe/types";

export interface ISearchResource {
    name: string;
    resourceType: FhirSearchFn;
}