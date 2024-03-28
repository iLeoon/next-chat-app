import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { Input } from '../../ui/input'

export default function SearchField() {
  return (
    <Input
      className="pl-9 pr-9 rounded-full w-48  outline-none focus-visible:ring-transparent"
      placeholder="Search"
      icon={
        <CiSearch
          size={18}
          className="absolute pointer-events-none top-1/2 transform -translate-y-1/2 left-3"
        />
      }
    />
  )
}
