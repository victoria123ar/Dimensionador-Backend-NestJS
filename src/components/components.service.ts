import { Injectable } from '@nestjs/common';
import { Component } from './entity/Component';

@Injectable()
export class ComponentsService {
    private components = [];
    private names = []

  getSongs(): Component[] {
/*     const names = await componentRepository.getNames();
    const nameObjects = names.map((name) => ({ name }));
    return nameObjects; */
    return this.components;
}
}
