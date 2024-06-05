import {signalStore, withState} from "@ngrx/signals";

export interface Environment {
  application: ApplicationInfo;
}

export interface ApplicationInfo {
  name: string;
}

const initialState: Environment = {
  application: {
    name: '',
  },
}


export const EnvironmentService = signalStore(
  {providedIn: 'root'},
  withState<Environment>(initialState)
);
