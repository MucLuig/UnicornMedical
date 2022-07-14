import { FhirSearchFn } from "@red-probeaufgabe/types";

/**
 * This interface define the earch/filter criteria
 */
export interface ISearchResource {
    name: string;
    resourceType: FhirSearchFn;
}