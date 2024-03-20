import { EmptyState } from "src/app/core/models/empty-state.model";
import { Assets } from "src/app/core/shared/assets";
const EMPTY_STATE_ICON = Assets.ICONS.EMPTY_STATE;
export const bookEmptyState: EmptyState = {
  illustration: EMPTY_STATE_ICON,
  message: 'There\'s no book at the moment'
}
