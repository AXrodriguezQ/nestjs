import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './students.entity';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: StudentsService) {}

    @Get()
    getStudents(): Promise<Student[]> {
    return this.studentService.getStudents();
    }

    @Get(':id')
    getOneStudent(@Param('id') id: string): Promise<Student> {
        return this.studentService.getOneStudent(id);
    }

    @Post()
    createStudent(@Body() body): Promise<Student> {
    return this.studentService.createStudent(body);
    }

    @Put(':id')
    updateStudent(@Param('id') id: string, @Body() body): string {
        return this.studentService.updateStudent(id, body);
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: string): string {
        return this.studentService.deleteStudent(id);
    }
}
