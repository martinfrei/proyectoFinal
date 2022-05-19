import React from 'react'
import PropTypes from 'prop-types'
import { Picture } from '../../atoms/Picture/Picture'
import { Heading } from '../../atoms/Heading/Heading'
import {Button} from '../../atoms/Button/Button'
import './DesktopHeader.css'

export const DesktopHeader = ({}) => {
    return (
        <header className='header-desktop'>
            <div className='logo'>
                <Picture width='xs' height='xs' image='logo'/>
                <Heading title='h2' type='md' variant='primary' >Sentite como en tu hogar</Heading>
            </div>
            <div className='botones-header'>
                <Button size='xs' variant={false} label='Crear cuenta' ></Button>
                <Button size='xs' variant={false} label='Iniciar sesión' ></Button>
            </div>
        </header>
    )
}


