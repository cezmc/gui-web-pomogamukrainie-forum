// TODO use generated API

import { Inject, Injectable, Optional } from '@angular/core';
import { of } from 'rxjs';
import {
  TranslationsOffer,
  TranslationsOfferSearchCriteria,
} from 'src/app/find-help/translations-search/translations-search-form/translations-search-form.component';
import { Pageable } from '../model/pageable';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec,
  HttpContext,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OffersTranslationsOffer {
  content?: Array<TranslationsOffer>;
  totalElements?: number;
  totalPages?: number;
}

@Injectable({
  providedIn: 'root',
})
export class TranslationsResourceService {
  constructor(protected httpClient: HttpClient) {}

  public listTranslations(
    pageRequest: Pageable,
    searchCriteria: TranslationsOfferSearchCriteria,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<OffersTranslationsOffer> {
    return this.httpClient.get<OffersTranslationsOffer>(`/ogloszenia/api/translations`);
  }

  public getTranslation(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<TranslationsOffer> {
    return this.httpClient.get<TranslationsOffer>(`/ogloszenia/api/translations/${encodeURIComponent(String(id))}`);
  }
}
