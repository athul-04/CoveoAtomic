import { buildSearchEngine } from '@coveo/headless';
import { Result } from '@coveo/headless';
import { 
  loadFieldActions,
  SearchEngine,
} from "@coveo/headless";


const FIELDS = [
    "book_name",
    "book_type",
];

const registerAdditionalFields = (headlessEngine: SearchEngine) => {
    const fieldActions = loadFieldActions(headlessEngine);
    headlessEngine.dispatch(fieldActions.registerFieldsToInclude(FIELDS));
    return headlessEngine;
}

const engine = buildSearchEngine({
  configuration: {
    organizationId: "athulrobertperficientcomcoralminnow9tm41fgv",
  accessToken: "",
  search: {
    pipeline: "BookPipeline",
    searchHub: "BookPage",
  }, 
  },
});
export const atomicEngine = registerAdditionalFields(engine);
