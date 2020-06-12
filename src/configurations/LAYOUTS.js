import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'

import { SSB_COLORS } from './'

export const infoText = text => <><Icon name='info circle' style={{ color: SSB_COLORS.BLUE }} />{text}</>

export const infoPopup = (text, trigger, position = 'top left', key = 'key') =>
  <Popup key={key} basic flowing trigger={trigger} position={position} size='large'>{infoText(text)}</Popup>
