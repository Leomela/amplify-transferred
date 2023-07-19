import { RenderRowContextMenuItemProps } from './DataGrid'

type ContextMenuItem = {
  label: string
  icon: string
  onClick: () => void
  needMenuClasses: boolean
}

const ContextMenu = (
  menuProps: RenderRowContextMenuItemProps,
  addContextMenuItems: ContextMenuItem[]
) => {
  const addContextMenuClasses = (hasBorder = true) => {
    return hasBorder
      ? 'flex gap-1 border-b border-gray-200 p-2 items-center'
      : 'flex gap-1 items-center p-2'
  }

  menuProps.autoDismiss = true
  menuProps.className = 'w-48 relative z-50 bg-white shadow-lg rounded-md'

  if (!menuProps.items) {
    menuProps.items = []
  }

  addContextMenuItems.forEach((item: ContextMenuItem) => {
    const { label, icon, onClick, needMenuClasses: addClasses } = item

    if (menuProps.items) {
      menuProps.items.push({
        label: (
          <span className={addContextMenuClasses(addClasses)}>
            <span className="material-symbols-outlined">{icon}</span>
            <span>{label}</span>
          </span>
        ),
        onClick: onClick,
      })
    }
  })
}

export default ContextMenu
