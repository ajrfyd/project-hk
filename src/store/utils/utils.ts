import { StateKeyType, DirType } from '../menu/types';
import { goHome, goPlayGround, goProfile} from '../menu/actions';
import React from 'react';
import axios from 'axios';

interface StrType {
  [key: string]: string;
}

interface Inner {
  type: string;
  payload: string;
};

interface ReturnType {
  [key: string]: Inner;
};

export const utils = {
  makeActionStr: (arr: string[]) => {
    const actions: StrType = {};

    arr.forEach(item => {
      actions[item] = `menu/GO_${item.toUpperCase()}` as const
    });
    return actions;
  },
  makeAction: (arr: string[]) => {
    const returnType: ReturnType = {};
    arr.forEach(item => {
      returnType[item] = { type: `GO_${item.toUpperCase()}`, payload: item }
    })

    return returnType;
  },
  changeDir : (state: StateKeyType, type: DirType) => {
    const newState = { ...state };
  
    for(const key in newState) {
      if(key === type) newState[key] = true;
      else newState[key] = false;
    }
    return newState;
  },
  makeInitialType: (arr: string[]) => {
    interface Type {
      [key: string]: boolean;
    }
    const menuType: Type = {};

    arr.forEach((item, idx) => {
      if(idx === 0) {
        menuType[item] = true;
      } else {
        menuType[item] = false;
      }
    })
    
    return menuType;
  },
  menuChanger: (destination: React.ReactNode) => {
    switch(destination) {
      case 'home': {
        return goHome();
      }
      case 'profile':
        return goProfile();
      case 'playground':
        return goPlayGround();
    }
  },
  getData: async (url: string) => {
    const { data } = await axios.get(url);
    return data;
  }
}