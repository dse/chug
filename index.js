import { createBuildTask } from "./gulp/build";
import { createCleanTask } from "./gulp/clean";
import { constants } from "./gulp/constants";
import { createDevTask } from "./gulp/dev";
import { createNunjucksTask } from "./gulp/nunjucks";
import { createRollupTask } from "./gulp/rollup";
import { createSassTask } from "./gulp/sass";
import { createServerTasks } from "./gulp/server";
import { createSiteData } from "./gulp/site-data";
import { createStaticTask } from "./gulp/static";
import { createWatchTask } from "./gulp/watch";

const index = {
    createBuildTask,
    createCleanTask,
    constants,
    createDevTask,
    createSassTask,
    createWatchTask,
    createNunjucksTask,
    createRollupTask,
    createServerTasks,
    createSiteData,
    createStaticTask,
};

export default index;
