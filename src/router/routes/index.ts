import { RouteConfig } from "vue-router";

const modules = import.meta.glob("/modules/*.ts", { eager: true });

function formatModules(_modules: any[], result: RouteConfig[]) {}
