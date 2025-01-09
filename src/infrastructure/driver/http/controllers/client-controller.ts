import { Request, Response } from 'express';
import { CreateClientDto } from '@/application/use-cases/client/dtos/create-client-dto';
import { FindAllClients } from '@/application/use-cases/client/ports/find-all-clients';
import { FindClientByCpfDto } from '@/application/use-cases/client/dtos/find-client-by-cpf-dto';
import { FindAllClientsDto } from '@/application/use-cases/client/dtos/find-all-clients-dto';
import { FindClientByCpf } from '@/application/use-cases/client/ports/find-client-by-cpf';
import { CreateClient } from '@/application/use-cases/client/ports/create-client';

export class ClientController {
  constructor(
    private createClientUseCase: CreateClient,
    private findClientByCpfUseCase: FindClientByCpf,
    private findAllClientsUseCase: FindAllClients
  ) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const client = await this.createClientUseCase.execute(req.body);
      if (!client) return res.status(400).json({ message: 'There is already a client registered with this CPF' });
      return res.status(201).json(client);
      } catch (error: unknown) {
      return res.status(500).json({ message: error });
      }
    };

  findByCpf = async (req: Request, res: Response): Promise<Response> => {
    try {
      const cpf = req.params.cpf;
      const client = await this.findClientByCpfUseCase.execute({cpf});
      if (!client) return res.status(404).json()
      return res.status(200).json(client);
    } catch (error: unknown) {
      return res.status(500).json({ message: error });
    }
  }
  
  findAllClients = async (req: Request, res: Response): Promise<Response> => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const clients = await this.findAllClientsUseCase.execute({page, pageSize});
      return res.status(200).json(clients)
    } catch (error: unknown) {
      return res.status(500).json({ message: error });
    }
  }
}