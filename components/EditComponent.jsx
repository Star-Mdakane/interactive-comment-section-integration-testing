import { useComments } from '@/context/CommentsContext'
import React from 'react'
import { useForm, useWatch } from 'react-hook-form'

const EditComponent = ({ item, type, setEdit }) => {

    const { editComment } = useComments()

    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            text: item.content
        }
    })

    const field = useWatch({
        control,
        name: 'text',
        defaultValue: ''
    })

    const emptyField = field.trim() === ''

    const onSubmit = (data) => {
        console.log(data);
        setEdit(false)
        editComment(item.id, data.text, type)
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='col-span-full md:col-start-2 md:col-span-2 grid gap-4'>
            <textarea name="text" rows={3} id=""
                className='w-full h-full px-4 py-2 focus:outline-text cursor-pointer'
                placeholder='Add reply...'
                {...register('text')}
            >
            </textarea>
            <button
                disabled={emptyField}
                className='w-26 h-12 items-center justify-center rounded-lg justify-self-end text-[16px] leading-[150%] tracking-normal font-medium bg-pri hover:bg-pri/50 text-white uppercase cursor-pointer'>
                {/* {btnLabel} */}
                Update
            </button>
        </form>
    )
}

export default EditComponent