

import ButtonComponent from "./ButtonComponent"

const ContainerComponent = () => {



    return (
        <div className='container flex flex-column' >
            <article className='flex'>
                <div className="">
                    <code>{'<Buttton />'}</code>
                    <ButtonComponent text={'Default'} />
                </div>
                <div>
                    <code>{'&:hover, &:focus'}</code>
                    <ButtonComponent text={'Default'} />
                </div>
            </article>
            <article className='flex'>
                <div>
                    <code>{'<Buttton variant=\'outline\' />'}</code>
                    <ButtonComponent variant={'outline'} text={'Default'} />
                </div>
                <div>
                    <code>{'&:hover, &:focus'}</code>
                    <ButtonComponent variant={'outline'} text={'Default'} />
                </div>
            </article>




            <article className='flex'>
                <div>
                    <code>{'<Buttton variant=\'text\' />'}</code>
                    <ButtonComponent variant='text' text={'Default'} />
                </div>
                <div>
                    <code>{'&:hover, &:focus'}</code>
                    <ButtonComponent variant={'text'} text={'Default'} />
                </div>
            </article>

            <article className='flex'>
                <div>
                    <code>{'<Buttton  disableShadow />'}</code>
                    <ButtonComponent text={'Default'} />
                </div>
            </article>

            <article className='flex'>
                <div>
                    <code>{'<Buttton disabled/>'}</code>
                    <ButtonComponent disabled text={'Disabled'} />
                </div>
                <div>
                    <code>{'<Buttton variant= \'text\' disabled />'}</code>
                    <ButtonComponent disabled variant={`text`} text={'Disabled'} />
                </div>
            </article>

            <article className='flex'>
                <div>
                    <code>{'<Buttton startIcon=\'home\' />'}</code>
                    <ButtonComponent startIcon={'home'} endIcon={'search'} text={'Default'} />
                </div>
                <div>
                    <code>{'<Buttton endIcon=\'search\' />'}</code>
                    <ButtonComponent endIcon={'search'} variant={`outline`} text={'Default'} />
                </div>
            </article>

            <article className='flex'>

                <div> <code>{'<Buttton size="sm" />'}</code>
                    <ButtonComponent size={'sm'} startIcon={'home'} endIcon={'search'} color={'primary'} text={'Default'} /></div>
                <div> <code>{'<Buttton size="md" />'}</code>
                    <ButtonComponent size={'md'} endIcon={'search'} text={'Default'} color={'primary'} /></div>
                <div> <code>{'<Buttton size="lg" />'}</code>
                    <ButtonComponent size={'lg'} endIcon={'search'} text={'Default'} color={'secondary'}/></div>
            </article>

            <article className='flex'>
                <div>
                    <code>{'<Buttton color="default" />'}</code>
                    <ButtonComponent color={'default'} size={'sm'} startIcon={'home'} endIcon={'search'} text={'Default'} />
                </div>
                <div>
                    <code>{'<Buttton color="primary"/>'}</code>
                    <ButtonComponent color={'primary'} size={'md'} endIcon={'search'} text={'Primary'} />
                </div>
                <div>
                    <code>{'<Buttton color="secondary"/>'}</code>
                    <ButtonComponent  color={'secondary'} size={'lg'} endIcon={'search'} text={'Secondary'} />
                </div>
                <div>
                    <code>{'<Buttton color="danger" />'}</code>
                    <ButtonComponent color={'danger'} size={'lg'} endIcon={'search'} text={'Danger'} />
                </div>
            </article>
        </div>
    )
}


export default ContainerComponent
