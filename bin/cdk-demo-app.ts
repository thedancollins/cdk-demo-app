#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import sqs = require('@aws-cdk/aws-sqs');

import { CdkDemoAppStack } from '../lib/cdk-demo-app-stack';

const app = new cdk.App();
new CdkDemoAppStack(app, 'CdkDemoAppStack');


