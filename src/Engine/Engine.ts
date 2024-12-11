import { buildSearchEngine } from '@coveo/headless';
import { Result } from '@coveo/headless';
import { 
  loadFieldActions,
  SearchEngine,
} from "@coveo/headless";

const FIELDS = [
    "book_name",
];

const registerAdditionalFields = (headlessEngine: SearchEngine) => {
    const fieldActions = loadFieldActions(headlessEngine);
    headlessEngine.dispatch(fieldActions.registerFieldsToInclude(FIELDS));
    return headlessEngine;
}

const engine = buildSearchEngine({
  configuration: {
    organizationId: "athulrobertperficientcomcoralminnow9tm41fgv",
  accessToken: "xx1c640b65-5834-47f5-a1ec-ef6a37f53d90",
  search: {
    pipeline: "BookPipeline",
    searchHub: "BookPage",
  }, 
  },
});
export const atomicEngine = registerAdditionalFields(engine);
