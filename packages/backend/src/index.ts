'use strict';
import fastify from 'fastify'
import cors from '@fastify/cors';
import 'reflect-metadata';

import {
  getExample,
  getExamples,
} from './resolvers/example';


const server = fastify()
server.register(cors, {});

server.get('/ping', async (request, reply) => {
  return 'pong\n'
});

// *** EVENTS ***

server.get('/examples', async (request, reply) => {
  const examples = await getExamples();
  const ex = 'this is an example.';
  const choices = [
    'I am comfy',
    'I would rather seat',
  ]
  return reply.code(200).send({
    data: examples,
  });
});

server.get('/examples/:exampleId', async (request, reply) => {
  const { params } = request;
  const { exampleId } = params as { exampleId: string };

  const example = await getExample(exampleId);
  return reply.code(200).send({
    data: example,
  });
});

// *** SERVER ***

server.listen({ port: 8093, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
});