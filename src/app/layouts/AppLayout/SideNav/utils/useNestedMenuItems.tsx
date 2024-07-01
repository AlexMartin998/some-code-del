import { useMemo } from 'react';
import { MdAdminPanelSettings } from 'react-icons/md';

import { ROUTER_PATHS } from '@/router/constants';
import { NestedMenuItemLevels } from '.';
import { FiHome } from 'react-icons/fi';

export interface NestedMenuItem {
  title: string;
  path?: string; // to
  icon?: React.ReactNode;
  admin?: boolean;

  level?: number;
  items?: NestedMenuItem[];
}
export const useNestedMenuItems = () => {
  const nestedMenu = useMemo(() => {
    return [
      {
        title: 'Inicio',
        icon: <FiHome />,
        path: ROUTER_PATHS.home,
        level: NestedMenuItemLevels.firsLevelAlone,
      },

      /////* Administración ----------------
      {
        title: 'Administración',
        icon: <MdAdminPanelSettings />,
        level: NestedMenuItemLevels.withChildren,
        items: [
          {
            title: 'Tipo Documento',
            path: '/del',
            level: 2,
          },

          {
            title: 'Tipo Regimen',
            path: ROUTER_PATHS.administracion.tiposRegimenNav,
            level: 2,
          },
          {
            title: 'Regimen',
            path: '/some-path1',
            level: 2,
          },
          {
            title: 'Regimen Nested',
            level: NestedMenuItemLevels.withChildren,
            items: [
              {
                title: 'Item 1',
                path: '/asdsadd',
                level: 3,
              },
              {
                title: 'Item 2',
                path: 'some-path3',
                level: 3,
              },
            ],
          },
        ].filter(item => !!item) as NestedMenuItem[],
      },
    ];
  }, []);

  return { nestedMenu };
};
