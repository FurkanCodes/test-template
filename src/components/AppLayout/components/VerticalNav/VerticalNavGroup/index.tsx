import React, { useMemo } from 'react';
import clsx from 'clsx';
import VerticalCollapse from '../VerticalCollapse';
import VerticalItem from '../VerticalItem';
import IntlMessages from 'src/helpers/IntlMessages';
import { checkPermission } from 'src/helpers/RouteHelper';
import { useAuthUser } from 'src/hooks/AuthHooks';
import { useSidebarContext } from 'src/context/AppContextProvider/SidebarContextProvider';
import VerticalNavGroupItem from './VerticalNavGroupItem';
import { RouterConfigData } from 'src/types/models/Apps';

type VerticalNavGroupProps = {
  item?: RouterConfigData;
  level?: any;
};

const VerticalNavGroup: React.FC<VerticalNavGroupProps> = ({ item, level }) => {
  const { sidebarTextColor } = useSidebarContext();
  const { user } = useAuthUser();
  const hasPermission = useMemo(
    () => checkPermission(item!.permittedRole, user.role),
    [item, user.role],
  );

  if (!hasPermission) {
    return null;
  }
  return (
    <>
      <VerticalNavGroupItem
        level={level}
        sidebarTextColor={sidebarTextColor}
        component='div'
        className={clsx('nav-item nav-item-header')}
      >
        {<IntlMessages id={item!.messageId} />}
      </VerticalNavGroupItem>

      {item!.children && (
        <>
          {item!.children.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === 'group' && (
                <NavVerticalGroup item={item} level={level} />
              )}

              {item.type === 'collapse' && (
                <VerticalCollapse item={item} level={level} />
              )}

              {item.type === 'item' && (
                <VerticalItem item={item} level={level} />
              )}
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
};

const NavVerticalGroup = VerticalNavGroup;

export default NavVerticalGroup;
