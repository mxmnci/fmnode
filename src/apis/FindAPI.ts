import { EntityResponse, FindRequestParams } from '..';
import { FileMakerRequestHandler } from '../request-handler';
import { FilemakerTSException } from '../types/exceptions';
export class FindAPI {
  private fm: FileMakerRequestHandler;

  constructor(fm: FileMakerRequestHandler) {
    this.fm = fm;
  }

  public async find<Entity>(findRequest: FindRequestParams<Entity>) {
    if (findRequest.query.length < 1) {
      throw new FilemakerTSException('Please define at least one query field');
    }

    const response = await this.fm.post<
      EntityResponse<Entity>,
      FindRequestParams<Entity>
    >('/_find', findRequest);

    return response;
  }
}
