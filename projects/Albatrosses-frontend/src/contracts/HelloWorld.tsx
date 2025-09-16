import { AppClient } from '@algorandfoundation/algokit-utils/types/app'
import { AlgorandClient } from '@algorandfoundation/algokit-utils'

export interface HelloWorldClient {
  hello(args: { name: string }): Promise<{ return: string }>
}

export class HelloWorldFactory {
  constructor(private config: { defaultSender?: string; algorand: AlgorandClient }) {}

  async deploy(options: { onSchemaBreak?: any; onUpdate?: any }) {
    // Mock implementation - replace with actual deployment logic
    const appClient = {
      send: {
        hello: async (args: { args: { name: string } }) => {
          return { return: `Hello, ${args.args.name}` }
        }
      }
    } as any

    return { appClient }
  }
}
