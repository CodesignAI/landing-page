import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-experiment-results.ts';
import '@/ai/flows/generate-initial-analog-design.ts';