import AppDataSource from '../data-source';
import Example from '../entity/Example';

export async function getExamples(): Promise<Example[]> {
  const exampleRepository = AppDataSource.getRepository(Example);
  const examples = await exampleRepository.find({ order: { date: "DESC" } });
  return examples;
}

export async function getExample(exampleId: string): Promise<Example | null> {
  const exampleRepository = AppDataSource.getRepository(Example);
  const example = await exampleRepository.findOne({
    where: { id: exampleId },
  });

  return example;
}