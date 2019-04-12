import { InjectionToken } from "@angular/core";
import { ContextModel } from "./context.model";

export const contextToken = new InjectionToken<ContextModel>('context_shape');